import { useEffect } from 'react';

import posthog from 'posthog-js';
import { useLocalStorage } from 'usehooks-ts';

import {
  COPY_VARIATIONS,
  CopyVariation,
} from '../constants/copy';

const EXPERIMENT_NAME = "landing-page-copy-1";

export function useCopyVariation() {
  const [variation, setVariation] = useLocalStorage<CopyVariation>(
    EXPERIMENT_NAME,
    "control"
  );

  useEffect(() => {
    // Check for URL parameter first (for testing)
    const urlParams = new URLSearchParams(window.location.search);
    const urlVariant = urlParams.get("variant") as CopyVariation;

    if (urlVariant && urlVariant in COPY_VARIATIONS) {
      setVariation(urlVariant);
      return;
    }

    // Get the experiment variation from PostHog
    const experimentVariation = posthog.getFeatureFlag(
      EXPERIMENT_NAME
    ) as CopyVariation;

    // If we have a valid variation, use it; otherwise, fall back to control
    if (experimentVariation && experimentVariation in COPY_VARIATIONS) {
      setVariation(experimentVariation);
    }

    // Track the experiment exposure
    posthog.capture("experiment_viewed", {
      experiment_name: EXPERIMENT_NAME,
      variation: experimentVariation || "control",
    });
  }, []);

  return COPY_VARIATIONS[variation];
}
