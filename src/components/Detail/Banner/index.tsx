import { cssBanner } from "./styles";

export default function Banner({
  bannerImage,
  coverImage,
}: {
  bannerImage?: string;
  coverImage?: string;
}) {
  return (
    <div css={cssBanner}>
      <div>
        <img className="banner" src={bannerImage} />
        <div className="darken"></div>
        <img className="cover" src={coverImage} />
      </div>
    </div>
  );
}
