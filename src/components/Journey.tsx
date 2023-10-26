import { useState } from "react";
import JourneyItem from "./JourneyItem";

const Journey = () => {
  const [visibleEducItem, setVisibleEducItem] = useState<1 | 2 | undefined>(1);
  const [visibleExpItem, setVisibleExpItem] = useState<1 | 2 | undefined>(1);

  const showEducItem = (value: 1 | 2) => {
    if (value === visibleEducItem) return setVisibleEducItem(undefined);
    setVisibleEducItem(value);
  };

  const showExpItem = (value: 1 | 2) => {
    if (value === visibleExpItem) return setVisibleExpItem(undefined);
    setVisibleExpItem(value);
  };

  return (
    <section id="journey" className="journey">
      <h2 className="slide-right">
        <span>02.</span>Journey
      </h2>
      <p className="sub-header slide-right">
        This journey is still in its early stages, but it has already taught me
        valuable lessons and skills, and I anticipate more great opportunities
        lying ahead.
      </p>
      <div className="journey-container">
        <div className="exp-container slide-down">
          <h3>Experience</h3>
          <hr />
          <JourneyItem
            header="Web Design and Development Intern"
            location="My Own Eva, LLC"
            year="2022"
            additionalInfo={[
              "prototyping and designing responsive web pages using Figma",
              "developing the company’s websites with WordPress and CSS",
            ]}
            isContentVisible={visibleEducItem === 1 ? true : false}
            onClick={() => showEducItem(1)}
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
            isContentVisible={visibleEducItem === 2 ? true : false}
            onClick={() => showEducItem(2)}
          />
          <hr />
        </div>
        <div className="educ-container slide-down">
          <h3>Education</h3>
          <hr />
          <JourneyItem
            header="Bachelor of Science in Computer Science"
            location="Polytechnic University of the Philippines"
            year="2019-2023"
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
            year="2017-2019"
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
