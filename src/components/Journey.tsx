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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        animi ea explicabo minus sequi esse.
      </p>
      <div className="journey-container">
        <div className="exp-container slide-down">
          <h3>Experience</h3>
          <hr />
          <JourneyItem
            header="Web Designer and Developer Intern"
            location="My Own Eva, LLC"
            year="2022"
            isContentVisible={visibleEducItem === 1 ? true : false}
            onClick={() => showEducItem(1)}
          />
          <hr />
          <JourneyItem
            header="Student Trainee"
            location="Bureau of Internal Revenue"
            year="2019"
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
            additionalInfo={["Cum Laude", "8x President's Lister"]}
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
