import { useState } from "react";
import { useQuery } from "@apollo/client";
import Carousel from "./Carousel";
import Filtering from "./Filtering";
import AnimeList from "./AnimeList";
import LoadMore from "./LoadMore";
import { GET_ANIME } from "../../graphql/anime";
import { Anime, AnimeResponse } from "../../types";
import { PRIMARY_COLOR, cssContainer, cssLoader } from "../../styles";
import { cssHome } from "./styles";
import { PuffLoader } from "react-spinners";
import Navbar from "../Navbar";

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [animeData, setAnimeData] = useState<Anime[]>([]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangeSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const { loading: animeLoading } = useQuery<AnimeResponse>(GET_ANIME, {
    variables: {
      ...(search && { search }),
      ...(page && { page }),
    },
    onCompleted: (data) => {
      const anime = data.Page.media;
      if (page > 1) {
        setAnimeData((prev) => [...prev, ...anime]);
      } else {
        setAnimeData(anime);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <Navbar />

      <main css={cssHome}>
        <div css={cssContainer}>
          <Carousel />

          {animeLoading && page === 1 ? (
            <div css={cssLoader}>
              <PuffLoader color={PRIMARY_COLOR} />
            </div>
          ) : (
            <>
              <Filtering search={search} onChangeSearch={handleChangeSearch} />
              <AnimeList animeData={animeData} />
              <LoadMore loading={animeLoading} onNextPage={handleNextPage} />
            </>
          )}
        </div>
      </main>
    </>
  );
}
