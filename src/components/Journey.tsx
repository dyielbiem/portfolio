import { useState } from "react";
import JourneyItem from "./JourneyItem";

const Journey = () => {
  const [visibleEducItem, setVisibleEducItem] = useState<Number | undefined>(1);
  const [visibleExpItem, setVisibleExpItem] = useState<Number | undefined>(1);

  const showEducItem = (value: Number) => {
    if (value === visibleEducItem) return setVisibleEducItem(undefined);
    setVisibleEducItem(value);
  };

  const showExpItem = (value: Number) => {
    if (value === visibleExpItem) return setVisibleExpItem(undefined);
    setVisibleExpItem(value);
  };

  return (
    <section id="journey" className="journey">
      <h2 className="slide-right">
        <span>02.</span>Journey
      </h2>
      <p className="sub-header slide-right">
        My journey as a developer continues to evolve, and keeps giving me
        valuable experiences and opportunities to grow. I strive to deliver
        quality solutions while continuously refining my skills and keeping up
        with rapidly evolving technology.
      </p>
      <div className="journey-container">
        <div className="exp-container slide-down">
          <h3>Experience</h3>
          <hr />
          <JourneyItem
            header="Software Developer"
            location="Ethos Bytes Pty Ltd"
            year="2024 — 2026"
            additionalInfo={[
              "collaborating with an Agile team to develop web and mobile applications",
              "deploying and maintaining mobile applications in production",
            ]}
            isContentVisible={visibleEducItem === 1 ? true : false}
            onClick={() => showEducItem(1)}
          />
          <hr />
          <JourneyItem
            header="Web Design and Development Intern"
            location="My Own Eva, LLC"
            year="2022"
            additionalInfo={[
              "prototyping and designing responsive web pages using Figma",
              "developing the company’s websites with WordPress and CSS",
            ]}
            isContentVisible={visibleEducItem === 2 ? true : false}
            onClick={() => showEducItem(2)}
          />
          <hr />
          <JourneyItem
            header="IT Student Trainee"
            location="Bureau of Internal Revenue"
            year="2019"
            additionalInfo={[
              "inputting tax payer’s physical records into the computer system",
              "assisting with computer-related tasks in the workplace",
            ]}
            isContentVisible={visibleEducItem === 3 ? true : false}
            onClick={() => showEducItem(3)}
          />
          <hr />
        </div>
        <div className="educ-container slide-down">
          <h3>Education</h3>
          <hr />
          <JourneyItem
            header="Bachelor of Science in Computer Science"
            location="Polytechnic University of the Philippines"
            year="2019 — 2023"
            isContentVisible={visibleExpItem === 1 ? true : false}
            additionalInfo={[
              "Cum Laude",
              "University Scholar (1st and 2nd Semester AY 2019 - 2023)",
              "Dr. Pio Valenzuela Scholar",
            ]}
            onClick={() => showExpItem(1)}
          />
          <hr />
          <JourneyItem
            header="Science, Technology, Engineering, and Mathematics"
            location="Pamantasan ng Lungsod ng Valenzuela"
            year="2017 — 2019"
            isContentVisible={visibleExpItem === 2 ? true : false}
            additionalInfo={["Academic Excellence Award - With Honors"]}
            onClick={() => showExpItem(2)}
          />
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Journey;
