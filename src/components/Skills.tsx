import { BsGit } from "react-icons/bs";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaNodeJs,
  FaPython,
  FaGithub,
  FaFigma,
  FaGitlab,
} from "react-icons/fa";
import { BiLogoVuejs, BiLogoReact, BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import {
  SiSass,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiDjango,
  SiAmazonaws,
  SiJira,
  SiServerless,
  SiExpo,
  SiDocker,
} from "react-icons/si";

const mainTechSkills = [
  {
    className: "html",
    icon: IoLogoHtml5,
  },
  {
    className: "css",
    icon: IoLogoCss3,
  },
  {
    className: "js",
    icon: IoLogoJavascript,
  },
  {
    className: "python",
    icon: FaPython,
  },
  {
    className: "react",
    icon: BiLogoReact,
  },
  {
    className: "react-native",
    icon: BiLogoReact,
  },
  {
    className: "expo",
    icon: SiExpo,
  },
  {
    className: "vue",
    icon: BiLogoVuejs,
  },
  {
    className: "next",
    icon: SiNextdotjs,
  },
  {
    className: "tailwind",
    icon: SiTailwindcss,
  },
  {
    className: "sass",
    icon: SiSass,
  },
  {
    className: "django",
    icon: SiDjango,
  },
  {
    className: "node",
    icon: FaNodeJs,
  },
  {
    className: "express",
    icon: SiExpress,
  },
  {
    className: "postgres",
    icon: BiLogoPostgresql,
  },
  {
    className: "mysql",
    icon: GrMysql,
  },
  {
    className: "mongo",
    icon: SiMongodb,
  },
];

const otherSkills = [
  {
    className: "aws",
    icon: SiAmazonaws,
  },
  {
    className: "docker",
    icon: SiDocker,
  },
  {
    className: "jira",
    icon: SiJira,
  },
  {
    className: "figma",
    icon: FaFigma,
  },
  {
    className: "git",
    icon: BsGit,
  },
  {
    className: "github",
    icon: FaGithub,
  },
  {
    className: "gitlab",
    icon: FaGitlab,
  },
  {
    className: "serverless",
    icon: SiServerless,
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="slide-down">
        <span>03.</span>Skills
      </h2>
      <p className="sub-header slide-down">
        Over the years, I have developed my skills in software development,
        particularly web and mobile development, using the technologies below in
        both professional work and personal projects.
      </p>
      <div className="skills">
        <div className="main-tech slide-right">
          <h3>Main Technologies</h3>
          {mainTechSkills.map(({ className, icon }) => {
            const Icon = icon;
            return (
              <div key={className} className={className}>
                <Icon />
              </div>
            );
          })}
        </div>
        <div className="others slide-left">
          <h3>Others</h3>
          {otherSkills.map(({ className, icon }) => {
            const Icon = icon;
            return (
              <div key={className} className={className}>
                <Icon />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
