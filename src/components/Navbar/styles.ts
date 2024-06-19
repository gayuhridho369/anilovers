import { css } from "@emotion/react";
import { PRIMARY_COLOR, WHITE_COLOR, breakpoints } from "../../styles";

export const cssNavbar = css({
  position: "fixed",
  zIndex: 5,
  width: "100%",
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
  backgroundColor: "#fff",
  transition: "all 0.3s ease-in-out",
  ".title": {
    display: "flex",
    gap: 2,
    cursor: "pointer",
    alignItems: "center",
    h1: {
      color: PRIMARY_COLOR,
      fontSize: 36,
      fontWeight: "bold",
      textShadow: `1.5px 0.5px ${WHITE_COLOR}`,
      [breakpoints.mobile]: {
        fontSize: 24,
      },
    },
    img: {
      width: 50,
      height: 50,
      [breakpoints.mobile]: {
        width: 35,
        height: 35,
      },
    },
  },
  ".collections": {
    display: "flex",
    cursor: "not-allowed",
    gap: 12,
    button: {
      padding: "8px 20px",
      backgroundColor: PRIMARY_COLOR,
      color: WHITE_COLOR,
      fontWeight: "bold",
      borderRadius: 8,
      outline: "none",
      border: "none",
      fontSize: 16,
      display: "flex",
      alignItems: "center",
      gap: 4,
      cursor: "not-allowed",
      [breakpoints.mobile]: {
        padding: "8px 16px",
        fontSize: 14,
      },
    },
  },
});

export const cssNavbarContainer = css({
  maxWidth: 1250,
  margin: "auto",
  padding: "0 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 70,
  [breakpoints.tablet]: {
    padding: "0 16px",
  },
  [breakpoints.mobile]: {
    padding: "0 12px",
  },
});
