import Slider from "react-slick";

import { cssCarouselItem, cssSliderSlick } from "./styles";
import { useQuery } from "@apollo/client";
import { AnimeResponse } from "../../../types";
import { GET_POPULAR_ANIME } from "../../../graphql/popular-anime";
import { useNavigate } from "react-router-dom";

export default function Carousel() {
  const navigate = useNavigate();

  const { data: popularAnimeData } = useQuery<AnimeResponse>(GET_POPULAR_ANIME);

  const sliderProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...sliderProps} css={cssSliderSlick}>
      {popularAnimeData?.Page.media.map((item) => (
        <div
          key={item.id}
          css={cssCarouselItem}
          onClick={() => navigate(`anime/${item.id}`)}
        >
          <img src={item?.bannerImage} className="banner" />
          <div className="darken"></div>

          <div className="content">
            <img src={item.coverImage.large} alt={item?.title?.english || ""} />
            <div className="title">
              <h1 className="english">{item.title.english}</h1>
              <h1 className="native">{item.title.native}</h1>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
