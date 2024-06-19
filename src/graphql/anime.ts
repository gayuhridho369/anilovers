import { gql } from "@apollo/client";

export const GET_ANIME = gql`
  query GetAnime($search: String, $page: Int) {
    Page(page: $page, perPage: 20) {
      media(search: $search, type: ANIME) {
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
