import React from "react";

import useStyles from "./Loader.styles";

/**
 *
 * @param param0
 * @returns
 */
const Loader = (): React.JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.ring}>
      <span></span>
    </div>
  );
};

export default Loader;
