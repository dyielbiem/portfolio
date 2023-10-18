import { BsGit } from "react-icons/bs";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { BiLogoTypescript, BiLogoReact, BiLogoFigma } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import {
  SiSass,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCsharp,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="slide-down">
        <span>03.</span>Skills
      </h2>
      <p className="sub-header slide-down">
        In recent years, I have been delving into software development,
        particularly web development. These are the technologies I have utilized
        for my projects.
      </p>
      <div className="skills">
        <div className="web-dev slide-right">
          <h3>Web Development</h3>
          <div className="html">
            <IoLogoHtml5 />
          </div>
          <div className="css">
            <IoLogoCss3 />
          </div>
          <div className="js">
            <IoLogoJavascript />
          </div>
          <div className="ts">
            <BiLogoTypescript />
          </div>
          <div className="tailwind">
            <SiTailwindcss />
          </div>
          <div className="sass">
            <SiSass />
          </div>
          <div className="react">
            <BiLogoReact />
          </div>
          <div className="next">
            <SiNextdotjs />
          </div>
          <div className="node">
            <FaNodeJs />
          </div>
          <div className="express">
            <SiExpress />
          </div>
          <div className="mongo">
            <SiMongodb />
          </div>
        </div>
        <div className="others slide-left">
          <h3>Others</h3>
          <div className="python">
            <FaPython />
          </div>
          <div className="csharp">
            <SiCsharp />
          </div>
          <div className="java">
            <FaJava />
          </div>
          <div className="mysql">
            <GrMysql />
          </div>
          <div className="git">
            <BsGit />
          </div>
          <div className="github">
            <FaGithub />
          </div>
          <div className="figma">
            <BiLogoFigma />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
