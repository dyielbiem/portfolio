"use client";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  isThisVisible: boolean;
  setIsThisVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AsideMenu = ({ isThisVisible, setIsThisVisible }: Props) => {
  const handleWindowResize = () => {
    if (window.innerWidth >= 769) {
      document.body.style.overflow = "visible";
      return setIsThisVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const closeAsideMenu = () => {
    document.body.style.overflow = "visible";
    setIsThisVisible(false);
  };

  return (
    <aside className={`aside-menu ${isThisVisible ? "show-aside" : ""}`}>
      <div className="bg-div" onClick={closeAsideMenu}></div>
      <div className="menu-content">
        <button className="btn-close" onClick={closeAsideMenu}>
          <AiOutlineClose className="close-icon" />
        </button>
        <nav>
          <ul>
            <li>
              <Link href={"#about"} onClick={closeAsideMenu}>
                <span>01.</span>About
              </Link>
            </li>
            <li>
              <Link href={"#journey"} onClick={closeAsideMenu}>
                <span>02.</span>Journey
              </Link>
            </li>
            <li>
              <Link href={"#skills"} onClick={closeAsideMenu}>
                <span>03.</span>Skills
              </Link>
            </li>
            <li>
              <Link href={"#projects"} onClick={closeAsideMenu}>
                <span>04.</span>Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AsideMenu;
