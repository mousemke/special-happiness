import React, { useMemo } from "react";
import Translationary from "translationary";

import Loader from "../Loader";
import RemoteWrapper from "../RemoteWrapper";
import ErrorBoundary from "../ErrorBoundary";

import translations from "../translations";

import type { SDKObject } from "./useSDK.types";

interface useSDKProps {
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string | null>>;
}

/**
 *
 * @param activePage
 * @param setCurrentLanguage
 * @returns
 */
const useSDK = ({ setCurrentLanguage }: useSDKProps): SDKObject => {
  /**
   *
   */
  const t = useMemo(
    () =>
      new Translationary({
        appName: "sdk",
        fetchTranslations: ({ lang }: { lang: string }) =>
          translations[lang as keyof typeof translations],
        lang: "en",
        onLanguageChange: (lang: string) => setCurrentLanguage(lang),
        formatter: (a: string) => a
      }),
    []
  );

  const WrappedLoader = (): React.JSX.Element => <Loader />;
  const WrappedRemoteWrapper = ({
    children
  }: {
    children: React.ReactNode;
  }): React.JSX.Element => <RemoteWrapper>{children}</RemoteWrapper>;

  const SDK = {
    components: {
      ErrorBoundary,
      Loader: WrappedLoader,
      RemoteWrapper: WrappedRemoteWrapper
    },
    t
  };

  /**
   *
   */
  return SDK;
};

export default useSDK;
