import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookMessenger,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const [isScrollAtBottom, setIsScrollAtBottom] = useState<boolean>(true);
  const [temp, setTemp] = useState("0");

  useEffect(() => {
    const observeScrollAtBottom = () => {
      const viewportHeight = document.documentElement.offsetHeight;
      const scrollPosition =
        document.documentElement.scrollTop + window.innerHeight + 10;

      if (viewportHeight <= scrollPosition + 10) {
        setIsScrollAtBottom(true);
      } else {
        setIsScrollAtBottom(false);
      }
    };

    window.addEventListener("scroll", observeScrollAtBottom);
    window.addEventListener("resize", observeScrollAtBottom);

    return () => {
      window.removeEventListener("scroll", observeScrollAtBottom);
      window.addEventListener("resize", observeScrollAtBottom);
    };
  }, []);

  return (
    <footer className={`footer ${isScrollAtBottom ? "" : "footer-exit"}`}>
      <div className="social-medias">
        <Link
          href={"https://m.me/dyielbiem/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebookMessenger />
        </Link>
        <Link
          href={"https://www.instagram.com/dyielbiem/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          href={"mailto:jlloydbmartinez@gmail.com"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiGmail />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/jlloydbmartinez/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          href={"https://github.com/dyielbiem/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </Link>
      </div>
      <Link
        href={"https://github.com/dyielbiem/portfolio"}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-desc"
      >
        Designed and Developed by <span>John Lloyd Martinez</span> © 2023
      </Link>
    </footer>
  );
};

export default Footer;
