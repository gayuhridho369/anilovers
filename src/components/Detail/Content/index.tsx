import { cssContent } from "./styles";

export default function Content({
  englishTitle,
  nativeTitle,
  description,
  genres,
  episodes,
  characters,
}: {
  englishTitle?: string;
  nativeTitle?: string;
  description: string;
  genres: string[];
  episodes: number;
  characters: Array<{
    name: {
      full: string;
      native: string;
    };
    image: {
      medium: string;
    };
  }>;
}) {
  return (
    <div css={cssContent}>
      <h1 className="title">
        {englishTitle} ({nativeTitle})
      </h1>

      <p
        className="description"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />

      <ul className="genres">
        <span>Genres:</span>
        {genres.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <div className="episodes">Episodes: {episodes}</div>

      <div className="characters">
        <span>Characters:</span>
        <ul>
          {characters.map((character) => (
            <li key={character.image.medium}>
              <img src={character.image.medium} />
              <div className="darken"></div>
              <span>{character.name.full}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
