import { css } from "@emotion/react";

export const PRIMARY_COLOR = "#EA580B";
export const WHITE_COLOR = "#F5F5F5";
export const GRAY_COLOR = "#808080";

export const breakpoints = {
  mobile: "@media (max-width: 600px)",
  tablet: "@media (max-width: 768px)",
  desktop: "@media (min-width: 1024px)",
};

export const cssContainer = css({
  maxWidth: 1250,
  margin: "auto",
  padding: "0 32px",
  [breakpoints.tablet]: {
    padding: "0 16px",
  },
  [breakpoints.mobile]: {
    padding: "0 12px",
  },
});

export const cssLoader = css({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: 64,
});
