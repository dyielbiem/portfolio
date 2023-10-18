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
          layout="intrisic"
          alt="about-image"
        />
        <p className="slide-right">
          Hello, I am John Lloyd Martinez and I enjoy building things for the
          web. My first exposure to software development was when I took my
          Bachelor of Science in Computer Science at the Polytechnic University
          of the Philippines in 2019, in which I started grasping the
          fundamental concepts of computer programming.
          <br /> <br />
          During my second year, I learned and practiced HTML and CSS for a
          school project. This experience turned out to be the fuel for my web
          development journey. Since then, I have been exploring and extending
          my knowledge in developing responsive and dynamic websites. Fast
          forward to the present, I have learned different modern web
          technologies such as Next.js, Tailwind CSS, Node.js, and more.
          <br /> <br />
          Recently, I have finished my Bachelor&apos;s Degree as a Cum Laude.
          Now, my primary focus is to gain relevant experience and further
          enhance my skills in an actual working environment.
        </p>
      </div>
    </section>
  );
};

export default About;
