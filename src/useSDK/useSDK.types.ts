import React from "react";

import type { Translator } from "translationary";

export interface SDKObject {
  components: {
    Loader: React.JSXElementConstructor<Record<string, never>>;
    ErrorBoundary: React.JSXElementConstructor<{ children: React.ReactNode }>;
    RemoteWrapper: React.JSXElementConstructor<{ children: React.ReactNode }>;
  };
  t: Translator;
}
