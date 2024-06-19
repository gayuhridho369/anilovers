import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { cssFiltering } from "./styles";

export default function Filtering({
  search,
  onChangeSearch,
}: {
  search: string;
  onChangeSearch: (value: string) => void;
}) {
  const [keywordValue, setKeywordValue] = useState(search || "");

  return (
    <div css={cssFiltering}>
      <input
        placeholder="Search anime..."
        value={keywordValue}
        onChange={(event) => setKeywordValue(event.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onChangeSearch(keywordValue);
          }
        }}
      />
      <button onClick={() => onChangeSearch(keywordValue)}>
        <FaSearch />
      </button>
    </div>
  );
}
