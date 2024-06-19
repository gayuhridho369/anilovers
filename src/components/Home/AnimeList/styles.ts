import { css } from "@emotion/react";
import {
  GRAY_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
  breakpoints,
} from "../../../styles";

export const cssAnimeList = css({
  marginTop: 24,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  justifyContent: "space-between",
  gap: 24,
  [breakpoints.tablet]: {
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 14,
  },
  [breakpoints.mobile]: {
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  ".anime-item": {
    cursor: "pointer",
    width: "100%",
    height: "300px",
    backgroundColor: GRAY_COLOR,
    borderRadius: 8,
    position: "relative",
    [breakpoints.tablet]: {
      height: "275px",
    },
    [breakpoints.mobile]: {
      height: "250px",
    },
  },
  img: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
  },
  ".anime-title": {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(234, 88, 11, 0.65)",
    color: WHITE_COLOR,
    height: 40,
    width: "100%",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    padding: "4px 6px",
    h3: {
      height: 40,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      overflow: "hidden",
      fontSize: 14,
      textOverflow: "ellipsis",
      [breakpoints.tablet]: {
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 14,
      },
      [breakpoints.mobile]: {
        gridTemplateColumns: "1fr 1fr",
        fontSize: 12,
        gap: 12,
        height: 30,
      },
    },
  },
  ".rating": {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: WHITE_COLOR,
    color: PRIMARY_COLOR,
    fontSize: 12,
    borderRadius: 5,
    padding: "2px 4px",
    fontWeight: 800,
    display: "flex",
    alignItems: "center",
    gap: 2,
    [breakpoints.mobile]: {
      top: 6,
      left: 6,
      fontSize: 10,
    },
  },
});
