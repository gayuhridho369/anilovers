import { VscLoading } from "react-icons/vsc";
import { cssLoadMore } from "./styles";

export default function LoadMore({
  loading,
  onNextPage,
}: {
  loading: boolean;
  onNextPage: () => void;
}) {
  return (
    <div css={cssLoadMore}>
      <button onClick={() => onNextPage()}>
        <span>Load more</span>
        {loading && <VscLoading />}
      </button>
    </div>
  );
}
