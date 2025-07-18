import { useEffect } from 'react';

import posthog from 'posthog-js';
import { useLocalStorage } from 'usehooks-ts';

import {
  COPY_VARIATIONS,
  CopyVariation,
} from '../constants/copy';

const EXPERIMENT_NAME = "landing-page-copy-2";

export function useCopyVariation() {
  const [variation, setVariation] = useLocalStorage<CopyVariation>(
    EXPERIMENT_NAME,
    "control"
  );

  useEffect(() => {
    // Validate the stored variation - if it's invalid, reset it
    if (!(variation in COPY_VARIATIONS)) {
      setVariation("control");
    }

    // Check for URL parameter first (for testing)
    const urlParams = new URLSearchParams(window.location.search);
    const urlVariant = urlParams.get("variant") as CopyVariation;

    if (urlVariant && urlVariant in COPY_VARIATIONS) {
      setVariation(urlVariant);
      return;
    }

    // Only proceed with PostHog if we don't have a valid stored variation
    // or if we just reset an invalid one
    if (!(variation in COPY_VARIATIONS)) {
      // Get the experiment variation from PostHog
      const experimentVariation = posthog.getFeatureFlag(
        EXPERIMENT_NAME
      ) as CopyVariation;

      // If we have a valid variation, use it; otherwise, fall back to control
      if (experimentVariation && experimentVariation in COPY_VARIATIONS) {
        setVariation(experimentVariation);
      } else {
        setVariation("control");
      }

      // Track the experiment exposure
      posthog.capture("experiment_viewed", {
        experiment_name: EXPERIMENT_NAME,
        variation: experimentVariation || "control",
      });
    }
  }, [setVariation, variation]);

  // Ensure we always return a valid variation
  const validVariation = variation in COPY_VARIATIONS ? variation : "control";
  return COPY_VARIATIONS[validVariation];
}
