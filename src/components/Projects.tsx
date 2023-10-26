import FeaturedProject from "./FeaturedProject";
import FurtherProject from "./FurtherProject";
import ModernMisery from "@/assets/ModernMisery.png";
import ISKOduler from "@/assets/ISKOduler.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="slide-up">
        <span>04.</span>Projects
      </h2>
      <div className="projects">
        <div className="featured-projects">
          <FeaturedProject
            projectName="ISKOduler"
            projectDesc="A web application for students, particularly scholars, that helps them in managing their school schedules."
            tags={[
              "Next",
              "Typescript",
              "Node",
              "Express",
              "Mongoose",
              "Tailwind",
            ]}
            liveURL="https://iskoduler.vercel.app/"
            github="https://github.com/dyielbiem/iskoduler/"
            img={{
              src: ISKOduler,
              width: 1347,
              height: 612,
            }}
            animation="slide-right"
          />
          <FeaturedProject
            projectName="Modern Misery"
            projectDesc="An inclusive digital platform where anyone can express their thoughts, emotions, and viewpoints on our modern world."
            tags={[
              "React",
              "Typescript",
              "Node",
              "Express",
              "Mongoose",
              "Tailwind",
            ]}
            liveURL="https://modernmisery.netlify.app/"
            github="https://github.com/dyielbiem/modern-misery/"
            img={{
              src: ModernMisery,
              width: 1139,
              height: 614,
            }}
            animation="slide-left"
          />
        </div>

        <div className="further-projects">
          <FurtherProject
            projectName="This Portfolio"
            projectDesc="This provides a glimpse of my background and demonstrates my qualifications, skills, and a collection of my projects."
            tags={["Next", "Sass", "Typescript"]}
            github="https://github.com/dyielbiem/portfolio/"
            showHome={true}
            animation="slide-right"
          />
          <FurtherProject
            projectName="PUP Hate Tweet Detection System"
            projectDesc="A dedicated system for PUP that utilizes machine learning techniques to monitor hate tweets targeting official PUP Twitter pages."
            tags={["Python", "Scikit-learn", "Gensim"]}
            animation="slide-left"
          />
          <FurtherProject
            projectName="Crimson"
            projectDesc="An inventory management system that can be used by businesses to maintain the records and statuses of all their products."
            tags={["C#", "Winforms", "MySQL"]}
            github="https://github.com/dyielbiem/crimson/"
            animation="slide-down"
          />
          <FurtherProject
            projectName="Inimitable Supply"
            projectDesc="A system responsible for storing order forms that contain the transaction records between a mock business and its buyer."
            tags={["Java", "Java Swing", "MySQL"]}
            github="https://github.com/dyielbiem/inimitable-supply/"
            animation="slide-up"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
