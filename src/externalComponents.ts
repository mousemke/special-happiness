import React from "react";

/**
 * ts is having issue with the remote loading syntax
 * this can be revisited, there's _always_ a better answer than @ts-expect-error
 */
/* eslint-disable import/no-unresolved */
export const TranslationToggle = React.lazy(
  // @ts-expect-error // lazy load weirdness
  () => import("Onboarding/TranslationToggle")
);
// @ts-expect-error // lazy load weirdness
export const Dashboard = React.lazy(() => import("Dashboard/Home"));
/* eslint-enable */

const pages = {
  TRANSLATION_TOGGLE: TranslationToggle,
  DASHBOARD: Dashboard
};

export default pages;
