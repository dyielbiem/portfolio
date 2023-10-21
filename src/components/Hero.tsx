import { MdSimCardDownload } from "react-icons/md";
import { IoIosPaperPlane } from "react-icons/io";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="slide-down">
        Howdy! My name is <span className="name">John Lloyd Martinez</span>
      </h1>
      <p className="slide-up">
        I am an aspiring full-stack web developer who provides solutions infused
        with strong passion and dedication. Regardless of complexity, my firm
        commitment is to deliver high-quality works.
      </p>
      <div className="btn-container">
        <button className="btn-resume slide-up">
          Download CV <MdSimCardDownload />{" "}
        </button>
        <Link
          href={"mailto:jlloydbmartinez@gmail.com"}
          target="_blank"
          rel="noopener noreferrrer"
          className="btn-contact slide-up"
        >
          Contact me <IoIosPaperPlane />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
