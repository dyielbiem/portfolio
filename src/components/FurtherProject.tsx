import { BiLogoGithub } from "react-icons/bi";
import { FaPuzzlePiece } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";

interface Props {
  projectName: string;
  projectDesc: string;
  tags: string[];
  github?: string;
  showHome?: boolean;
  animation?: string;
}

const FurtherProject = ({
  projectName,
  projectDesc,
  tags,
  github,
  showHome = false,
  animation,
}: Props) => {
  return (
    <div className={`further-item ${animation}`}>
      <div className="further-top">
        <FaPuzzlePiece />
        <div className="link-container">
          {github && (
            <Link href={github} target="_target" rel="noopener noreferrer">
              <BiLogoGithub />
            </Link>
          )}
          {showHome && <AiFillHome />}
        </div>
      </div>
      <h3>{projectName}</h3>
      <p>{projectDesc}</p>
      <ul>
        {tags.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FurtherProject;
