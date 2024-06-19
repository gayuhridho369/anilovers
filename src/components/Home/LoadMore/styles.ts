import { css, keyframes } from "@emotion/react";
import { PRIMARY_COLOR, WHITE_COLOR } from "../../../styles";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const cssLoadMore = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 24,
  button: {
    padding: "10px 14px",
    border: "none",
    outline: "none",
    color: WHITE_COLOR,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 8,
    fontWeight: "bold",
    marginBottom: 24,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
    svg: {
      animation: `${rotate} 1s linear infinite`,
    },
  },
});
