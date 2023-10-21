import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMoonClearLine } from "react-icons/ri";
import { LuSun } from "react-icons/lu";

import { VscListSelection } from "react-icons/vsc";

interface Props {
  isAsideVisible: boolean;
  setIsAsideVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsAsideVisible, isAsideVisible }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [isScrollAtTop, setIsScrollAtTop] = useState<boolean>(true);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);
  const [doesUserScrollingDown, setDoesUserScrollingDown] =
    useState<boolean>(false);

  const handleTheme = (theme: "dark" | "light") => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  };

  const openAsideMenu = () => {
    setIsAsideVisible(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    if (document.documentElement.scrollTop > 0) {
      setIsScrollAtTop(false);
    }

    let currentScroll = window.scrollY;
    const handleScroll = () => {
      if (document.documentElement.scrollTop !== 0) {
        setIsScrollAtTop(false);
      } else {
        setIsScrollAtTop(true);
      }

      if (currentScroll < window.scrollY) {
        setDoesUserScrollingDown(true);
      } else {
        setDoesUserScrollingDown(false);
      }

      currentScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (document.readyState !== "loading") {
        setIsPageLoaded(true);
      }
    }, 3500);
  }, []);

  return (
    <header
      className={`${isScrollAtTop ? "" : "semi-transparent-header"} 
      ${isPageLoaded ? "animate-header" : ""}
      ${doesUserScrollingDown ? "hide-header" : ""}`}
    >
      <div className="header-width-limiter">
        <div className="logo-container">
          <Link href={"/"} className="logo"></Link>
        </div>
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
        <div className="toggle-container">
          <button
            onClick={() => handleTheme("light")}
            className={`toggle light ${isDarkTheme ? "" : "hide-toggle"}`}
          >
            <LuSun />
          </button>
          <button
            onClick={() => handleTheme("dark")}
            className={`toggle dark ${!isDarkTheme ? "" : "hide-toggle"} `}
          >
            <RiMoonClearLine />
          </button>
        </div>
        <button
          className={`btn-menu ${isAsideVisible ? "hide-btn-menu" : ""}`}
          onClick={openAsideMenu}
        >
          <VscListSelection className="menu-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
