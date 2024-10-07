import React from "react";

// this import should instead be supplied by the SDK
/* eslint-disable import/no-relative-packages */
import type { SDKObject } from "../../../../src/useSDK";
/* eslint-enable */

const TranslationToggle = ({ t }: SDKObject) => (
  <button
    style={{
      position: "absolute",
      top: "1em",
      right: "0em",
      width: 150
    }}
    onClick={() => t.setLanguage(t.getLanguage() === "jp" ? "en" : "jp")}
  >
    {t("SET_LANGUAGE")}
  </button>
);

export default TranslationToggle;
