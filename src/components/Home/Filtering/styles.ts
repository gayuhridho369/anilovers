import { css } from "@emotion/react";
import {
  GRAY_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
  breakpoints,
} from "../../../styles";

export const cssFiltering = css({
  marginTop: 72,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  [breakpoints.tablet]: {
    marginTop: 64,
  },
  [breakpoints.mobile]: {
    marginTop: 48,
  },
  input: {
    padding: "12px 18px",
    fontSize: 16,
    border: `1px solid ${PRIMARY_COLOR}`,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    width: 400,
    outline: "none",
    color: GRAY_COLOR,
    fontWeight: "bold",
    background: "transparent",
    [breakpoints.tablet]: {
      padding: "10px 16px",
    },
    [breakpoints.mobile]: {
      padding: "8px 14px",
      fontSize: 14,
    },
  },
  button: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 18px",
    fontSize: 16,
    backgroundColor: PRIMARY_COLOR,
    border: "none",
    margin: "none",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    color: WHITE_COLOR,
    [breakpoints.tablet]: {
      padding: "10px 16px",
    },
    [breakpoints.mobile]: {
      padding: "8px 14px",
      fontSize: 14,
    },
  },
});
