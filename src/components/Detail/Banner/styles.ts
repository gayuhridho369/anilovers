import { css } from "@emotion/react";
import { breakpoints } from "../../../styles";

export const cssBanner = css({
  width: "100%",
  maxWidth: 1250,
  padding: "85px 32px 0",
  margin: "auto",
  height: "max-content",
  [breakpoints.tablet]: {
    padding: "85px 16px 0",
  },
  [breakpoints.mobile]: {
    padding: "85px 12px 0",
  },
  "img.banner": {
    width: "100%",
    height: 300,
    objectFit: "cover",
    [breakpoints.tablet]: {
      height: 250,
    },
    [breakpoints.mobile]: {
      height: 200,
    },
  },
  "&>div": {
    position: "relative",
  },
  ".darken": {
    position: "absolute",
    height: 300,
    width: "100%",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    [breakpoints.tablet]: {
      height: 250,
    },
    [breakpoints.mobile]: {
      height: 200,
    },
  },
  "img.cover": {
    position: "absolute",
    objectFit: "cover",
    backgroundColor: "gray",
    top: "120px",
    left: "50px",
    border: `8px solid #FFF`,
    width: 225,
    height: 300,
    [breakpoints.tablet]: {
      left: "50%",
      transform: "translateX(-50%)",
      width: 200,
      height: 250,
      top: "50px",
    },
    [breakpoints.mobile]: {
      width: 175,
      height: 225,
      top: "30px",
    },
  },
});
