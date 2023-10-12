const Hero = () => {
  return (
    <section className="hero">
      <h1 className="slide-down">
        Hello there! I am <span className="name">John Lloyd Martinez</span>
      </h1>
      <p className="slide-up">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus totam
        assumenda cupiditate, quae omnis consectetur.
      </p>
      <div className="btn-container slide-up">
        <button className="btn-resume ">Resume</button>
        <button className="btn-contact ">Contact</button>
      </div>
    </section>
  );
};

export default Hero;
