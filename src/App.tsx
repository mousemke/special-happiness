import React, { useState } from "react";

import RemoteWrapper from "./RemoteWrapper";
import { Dashboard, TranslationToggle } from "./externalComponents";
import useSDK from "./useSDK";

import useStyles from "./App.styles";

/**
 *
 * @returns
 */
const App = (): React.JSX.Element => {
  const [, setCurrentLanguage] = useState<string | null>(null);

  const classes = useStyles();
  const SDK = useSDK({ setCurrentLanguage });

  return (
    <div className={classes.wrapper}>
      <div className={classes.languageToggle}>
        <RemoteWrapper>
          <TranslationToggle {...SDK} />
        </RemoteWrapper>
      </div>
      <div className={classes.content}>
        <RemoteWrapper>
          <Dashboard {...SDK} />
        </RemoteWrapper>
      </div>
    </div>
  );
};

export default App;
