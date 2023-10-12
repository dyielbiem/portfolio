import React from "react";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Props {
  projectName: string;
  projectDesc: string;
  tags: string[];
  liveURL?: string;
  github?: string;
  img: {
    src: StaticImageData;
    width: number;
    height: number;
  };
  animation?: string;
}

const FeaturedProject = ({
  projectName,
  projectDesc,
  tags,
  img,
  liveURL,
  github,
  animation,
}: Props) => {
  return (
    <div className={`featured-item ${animation}`}>
      <h3>{projectName}</h3>
      <p>{projectDesc}</p>
      <ul>
        {tags.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
      {(liveURL || github) && (
        <div className="link-container">
          {github && (
            <Link href={github} target="_target" rel="noopener noreferrer">
              <BiLogoGithub />
            </Link>
          )}
          {liveURL && (
            <Link href={liveURL} target="_target" rel="noopener noreferrer">
              <BiLinkExternal />
            </Link>
          )}
        </div>
      )}
      <div className="img-container">
        <Image
          src={img.src}
          height={img.height}
          width={img.width}
          quality={100}
          alt={`${projectName}-image`}
        />
      </div>
    </div>
  );
};

export default FeaturedProject;
