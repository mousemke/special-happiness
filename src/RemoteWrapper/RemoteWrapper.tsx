import React, { Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary";
import Loader from "../Loader";

/**
 *
 * @param param0
 * @returns
 */
const RemoteWrapper = ({
  children
}: {
  children: React.ReactNode;
}): React.JSX.Element => (
  <Suspense fallback={<Loader />}>
    <ErrorBoundary>
      <div style={{ transform: "rotate(0deg)" }}>{children}</div>
    </ErrorBoundary>
  </Suspense>
);

export default RemoteWrapper;
