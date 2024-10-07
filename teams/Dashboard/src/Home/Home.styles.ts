import { css } from "@emotion/css";

const styles = {
  header: css({
    marginBottom: 16
  }),
  result: (diff: number) => {
    if (diff < 0) {
      return css({
        color: "#f00"
      });
    }
    if (diff > 0) {
      return css({
        color: "#33af33"
      });
    }

    return css({
      color: "#000"
    });
  }
};

export default styles;
