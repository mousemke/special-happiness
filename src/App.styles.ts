import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "@global": {
      body: {
        width: "100vw",
        margin: 0,
        background: "#ffffff",
        height: "100vh",
        fontFamily: "'Rational Semi Bold', Daytona, sans-serif"
      }
    },
    wrapper: {
      display: "flex",
      height: "100vh",
      flexDirection: "column"
    },
    languageToggle: {
      height: "4rem",
      padding: "2rem 2rem 0 2rem",
      position: "sticky",
      zIndex: 1,
      top: 0
    },
    content: {
      transform: "rotate(0deg)",
      background: "#ffffff",
      height: "calc(100% - 8rem)",
      padding: "0 2rem 0 2rem"
    }
  },
  {
    name: "App"
  }
);

export default useStyles;
