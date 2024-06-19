import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import Navbar from "../Navbar";
import { GET_ANIME_DETAIL } from "../../graphql/anime-detail";
import { AnimeDetailResponse } from "../../types";
import { PRIMARY_COLOR, cssContainer, cssLoader } from "../../styles";
import Banner from "./Banner";
import Content from "./Content";

export default function Detail() {
  const { id } = useParams();

  const { data, loading } = useQuery<AnimeDetailResponse>(GET_ANIME_DETAIL, {
    variables: {
      id,
    },
  });

  const animeDetail = data?.Media;

  return (
    <>
      <Navbar />

      <Banner
        bannerImage={animeDetail?.bannerImage}
        coverImage={animeDetail?.coverImage.large}
      />

      <div css={cssContainer}>
        {loading ? (
          <div css={cssLoader}>
            <PuffLoader color={PRIMARY_COLOR} />
          </div>
        ) : (
          <Content
            englishTitle={animeDetail?.title?.english || ""}
            nativeTitle={animeDetail?.title?.native || ""}
            description={animeDetail?.description || ""}
            genres={animeDetail?.genres || []}
            episodes={animeDetail?.episodes || 0}
            characters={animeDetail?.characters.nodes || []}
          />
        )}
      </div>
    </>
  );
}
