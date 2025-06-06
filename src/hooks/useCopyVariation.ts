import {
  useEffect,
  useState,
} from 'react';

import posthog from 'posthog-js';

import {
  COPY_VARIATIONS,
  CopyVariation,
} from '../constants/copy';

const EXPERIMENT_NAME = "landing-page-copy";

export function useCopyVariation() {
  const [variation, setVariation] = useState<CopyVariation>("control");

  useEffect(() => {
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
