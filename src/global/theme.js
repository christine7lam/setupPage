import base, { withTheme } from "@paciolan/pac-theme-base";
import { css } from "styled-components";

export default withTheme(base).extendInto({
  global: css`
    div.tooltip-popper {
      padding: 6px 8px;
      width: 226px;
    }

    div.tooltip-popper > div {
      font-size: 10px;
      width: 198px;
      text-align: left;
    }
  `,
  typography: {
    body1: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"]
    },
    columnHeaderText: {
      display: "inline-block"
    },
    ellipsis: {
      whiteSpace: "normal",
      overflow: "visible",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      width: "100%"
    },
    flex: {
      display: "flex",
      row: "row",
      column: "column",
      start: "flex-start",
      end: "flex-end",
      center: "center"
    },
    opacity: {
      0: "0",
      1: "0.1",
      2: "0.2",
      3: "0.3",
      4: "0.4",
      5: "0.5",
      6: "0.6",
      7: "0.7",
      8: "0.8",
      9: "0.9",
      10: "1"
    },
    gridHeader: {
      whiteSpace: "normal",
      overflow: "visible",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      display: "flex",
      fontSize: "0.75rem",
      fontWeight: "400"
    }
  },
  palette: {
    // defined by UX team, notify if changed
    gray: {
      gray1: "#f3f3f3",
      gray2: "#e6e6e6",
      gray3: "#d7d7d7",
      gray4: "#9a9a9a",
      gray5: "#6a6a6a",
      gray6: "#333333"
    }
  }
});
