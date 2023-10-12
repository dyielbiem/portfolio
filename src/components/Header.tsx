import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";

interface Props {
  setIsAsideVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsAsideVisible }: Props) => {
  const handleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  const openAsideMenu = () => {
    setIsAsideVisible(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <header>
      <h1>JLBM</h1>
      <nav>
        <ul>
          <li>
            <Link href={"#about"}>
              <span>01.</span>About
            </Link>
          </li>
          <li>
            <Link href={"#journey"}>
              <span>02.</span>Journey
            </Link>
          </li>
          <li>
            <Link href={"#skills"}>
              <span>03.</span>Skills
            </Link>
          </li>
          <li>
            <Link href={"#projects"}>
              <span>04.</span>Projects
            </Link>
          </li>
        </ul>
      </nav>

      <input type="checkbox" id="theme" onChange={handleTheme} />
      <label htmlFor="theme" className="toggle">
        Label
      </label>
      <button className="btn-menu" onClick={openAsideMenu}>
        <CgMenuLeft className="menu-icon" />
      </button>
    </header>
  );
};

export default Header;
