import { gql } from "@apollo/client";

export const GET_ANIME_DETAIL = gql`
  query GetAnimeDetails($id: Int!) {
    Media(id: $id, type: ANIME) {
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
      episodes
      characters {
        nodes {
          name {
            full
            native
          }

          image {
            medium
          }
        }
      }
    }
  }
`;
