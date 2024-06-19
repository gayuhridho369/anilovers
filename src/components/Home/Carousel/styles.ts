import { css } from "@emotion/react";
import { PRIMARY_COLOR, breakpoints } from "../../../styles";

export const cssSliderSlick = css({
  marginTop: 85,
  ".slick-list": {
    height: 300,
    [breakpoints.tablet]: {
      height: 250,
    },
    [breakpoints.mobile]: {
      height: 200,
    },
  },
  ".slick-track, .slick-slide": {
    height: "100%",
    backgroundColor: "grey",
  },
  ".slick-arrow": {
    display: "none !important",
  },
});

export const cssCarouselItem = css({
  backgroundColor: "grey",
  position: "relative",
  zIndex: 5,
  cursor: "pointer",
  ".banner": {
    objectFit: "cover",
    height: "300px",
    width: "100%",
    [breakpoints.tablet]: {
      height: 250,
    },
    [breakpoints.mobile]: {
      height: 200,
    },
  },
  ".darken": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  ".content": {
    position: "absolute",
    top: "50%",
    left: 20,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    gap: 24,
    transform: "translateY(-50%)",
    [breakpoints.tablet]: {
      gap: 20,
    },
    [breakpoints.mobile]: {
      gap: 16,
    },
    img: {
      height: "250px",
      width: "auto",
      borderRadius: "8px",
      [breakpoints.tablet]: {
        height: "200px",
      },
      [breakpoints.mobile]: {
        height: "150px",
      },
      boxShadow:
        "rgba(255, 255, 255, 0.4) 0px 2px 4px, rgba(255, 255, 255, 0.3) 0px 7px 13px -3px, rgba(255, 255, 255, 0.2) 0px -3px 0px inset",
    },
    ".title": {
      h1: {
        fontSize: 48,
        color: "#fff",
        textShadow: `3px 4px #000000`,
        [breakpoints.tablet]: {
          fontSize: 36,
          textShadow: `2px 3px #000000`,
        },
        [breakpoints.mobile]: {
          fontSize: 24,
          textShadow: `1px 2px #000000`,
        },
        "&.native": {
          fontSize: 32,
          color: PRIMARY_COLOR,
          [breakpoints.tablet]: {
            fontSize: 24,
          },
          [breakpoints.mobile]: {
            fontSize: 16,
          },
        },
      },
    },
  },
});
