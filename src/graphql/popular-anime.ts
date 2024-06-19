import { gql } from "@apollo/client";

export const GET_POPULAR_ANIME = gql`
  query GetPopularAnime {
    Page(page: 1, perPage: 3) {
      media(sort: FAVOURITES_DESC, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        description
        coverImage {
          medium
          large
        }
        bannerImage
        popularity
        averageScore
        genres
      }
    }
  }
`;
