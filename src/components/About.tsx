import Image from "next/image";
import AboutImage from "@/assets/aboutImage.jpg";
const About = () => {
  return (
    <section id="about">
      <h2 className="slide-down">
        <span>01.</span>About
      </h2>
      <div className="about">
        <Image
          className="slide-left"
          src={AboutImage}
          width={600}
          height={800}
          quality={100}
          alt="about-image"
        />
        <p className="slide-right">
          Hello, I’m John Lloyd Martinez, a software developer with almost three
          years of experience in web and mobile development. I enjoy building
          applications that are responsive, functional, and focused on
          delivering a good user experience.
          <br /> <br />
          My journey in software development began when I pursued a Bachelor of
          Science in Computer Science at the Polytechnic University of the
          Philippines in 2019, where I developed a strong foundation in
          programming and software development.
          <br /> <br />
          Through my professional experience in web and mobile development, I
          have worked with modern technologies to build applications that
          deliver solutions to modern problems. I continue to expand my skills
          by exploring new technologies, keeping up with modern development
          practices, and deepening my knowledge as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
