import Link from "next/link";

const Contact = () => {
  return (
    <section className="contact slide-left">
      <h2 className="slide-down">Drop Me A Line</h2>
      <p className="slide-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        obcaecati necessitatibus vel dolorum expedita temporibus et deleniti
        rerum maxime aperia.
      </p>
      <Link
        href={"mailto:jlloydbmartinez@gmail.com"}
        rel="noopener noreferrer"
        target="_blank"
        className="slide-up"
      >
        Contact me
      </Link>
    </section>
  );
};

export default Contact;
