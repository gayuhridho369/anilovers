import { FaStar } from "react-icons/fa";
import { Anime } from "../../../types";
import { cssAnimeList } from "./styles";
import { useNavigate } from "react-router-dom";

export default function AnimeList({ animeData }: { animeData: Anime[] }) {
  const navigate = useNavigate();

  return (
    <div css={cssAnimeList}>
      {animeData.map((item) => (
        <div
          className="anime-item"
          onClick={() => navigate(`anime/${item.id}`)}
        >
          <img src={item.coverImage.large} alt={item?.title?.english || ""} />
          <div className="anime-title">
            <h3>{item?.title?.english || item.title.romaji}</h3>
          </div>
          <div className="rating">
            <FaStar />
            <span>{(item.averageScore / 10).toFixed(1)} </span>
          </div>
        </div>
      ))}
    </div>
  );
}
