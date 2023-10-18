import Link from "next/link";
import { IoIosPaperPlane } from "react-icons/io";

const Contact = () => {
  return (
    <section className="contact slide-right">
      <h2 className="slide-down">Get In Touch</h2>
      <p className="slide-right">
        My inbox is always open for you. Whether you would like to say hello,
        ask a question, or share something, just leave me a message. I am glad
        to do my utmost to provide you an immediate response!
      </p>
      <Link
        href={"mailto:jlloydbmartinez@gmail.com"}
        rel="noopener noreferrer"
        target="_blank"
        className="slide-up"
      >
        Send a message <IoIosPaperPlane />
      </Link>
    </section>
  );
};

export default Contact;
