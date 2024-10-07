import React from "react";
import Translationary from "translationary";

/**
 * this (in a more advanced form) can be exported as a yarn package to be
 * consumed by child front ends
 */
export const mockSDK = {
  t: new Translationary({
    appName: "sdk",
    fetchTranslations: () => {},
    lang: "en",
    onLanguageChange: () => {},
    formatter: () => {}
  }),
  components: {
    ErrorBoundary: () => <div>ErrorBoundary</div>,
    Loader: () => <div>Loader</div>,
    RemoteWrapper: () => <div>RemoteWrapper</div>
  }
};

export default mockSDK;
