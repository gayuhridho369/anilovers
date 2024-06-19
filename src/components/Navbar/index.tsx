import { useEffect, useState } from "react";
import { IoIosSave } from "react-icons/io";
import IconAnime from "../../assets/one-piece.png";
import { cssNavbar, cssNavbarContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div data-active={active} css={cssNavbar}>
      <div css={cssNavbarContainer}>
        <div className="title" onClick={() => navigate("/")}>
          <img src={IconAnime} alt="icon-anilovers" />
          <h1>Anilovers</h1>
        </div>

        <div className="collections">
          <button>
            <IoIosSave />
            Collections
          </button>
        </div>
      </div>
    </div>
  );
}
