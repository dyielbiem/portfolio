import { MdSimCardDownload } from "react-icons/md";
import { IoIosPaperPlane } from "react-icons/io";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="slide-down">
        Hey there! I go by the name{" "}
        <span className="name">John Lloyd Martinez</span>
      </h1>
      <p className="slide-up">
        I am an aspiring full-stack web developer who provides solutions infused
        with strong passion and dedication. Regardless of complexity, my firm
        commitment is to deliver high-quality works.
      </p>
      <div className="btn-container slide-up">
        <button className="btn-resume ">
          Download CV <MdSimCardDownload />{" "}
        </button>
        <Link
          href={"mailto:jlloydbmartinez@gmail.com"}
          target="_blank"
          rel="noopener noreferrrer"
          className="btn-contact "
        >
          Contact me <IoIosPaperPlane />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
