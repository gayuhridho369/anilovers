import { css } from "@emotion/react";
import { PRIMARY_COLOR, WHITE_COLOR, breakpoints } from "../../../styles";

export const cssContent = css({
  marginLeft: 300,
  marginTop: 24,
  marginBottom: 64,
  [breakpoints.tablet]: {
    marginLeft: 0,
    marginTop: 48,
  },
  ".title": {
    fontSize: 32,
    [breakpoints.tablet]: {
      fontSize: 28,
    },
    [breakpoints.mobile]: {
      fontSize: 24,
    },
  },
  ".description": {
    marginTop: 16,
    color: "#575757",
    lineHeight: "24px",
    fontSize: 16,
    [breakpoints.tablet]: {
      fontSize: 14,
      lineHeight: "20px",
    },
    [breakpoints.mobile]: {
      fontSize: 12,
      lineHeight: "18px",
    },
  },
  ".genres": {
    marginTop: 16,
    listStyle: "none",
    display: "flex",
    fontSize: 14,
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
    span: {
      fontWeight: "bold",
    },
    li: {
      borderRadius: 8,
      padding: "4px 8px",
      backgroundColor: PRIMARY_COLOR,
      color: WHITE_COLOR,
      fontSize: 12,
      fontWeight: "bold",
    },
  },
  ".episodes": {
    marginTop: 16,
    fontWeight: "bold",
    fontSize: 14,
  },
  ".characters": {
    "&>span": {
      fontWeight: "bold",
      fontSize: 14,
      marginTop: 16,
      marginBottom: 8,
      display: "block",
    },
    ul: {
      listStyle: "none",
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      width: "100%",
      li: {
        position: "relative",
        img: {
          width: 110,
          height: 110,
          objectFit: "cover",
        },
        ".darken": {
          position: "absolute",
          width: 110,
          height: 110,
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        },
        span: {
          position: "absolute",
          left: 0,
          bottom: 2,
          padding: 4,
          fontSize: 12,
          color: WHITE_COLOR,
          textShadow: "1px 1px #000",
        },
      },
    },
  },
});
