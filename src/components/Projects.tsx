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
            projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi nihil voluptatem itaque sapiente amet modi minima officia"
            tags={[
              "Next",
              "Typescript",
              "Node",
              "Express",
              "Mongoose",
              "Tailwind",
            ]}
            liveURL="https://iskoduler.vercel.app"
            github="https://google.com"
            img={{
              src: ISKOduler,
              width: 1347,
              height: 612,
            }}
            animation="slide-right"
          />
          <FeaturedProject
            projectName="Modern Misery"
            projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi nihil voluptatem itaque sapiente amet modi minima officia"
            tags={[
              "React",
              "Typescript",
              "Node",
              "Express",
              "Mongoose",
              "Tailwind",
            ]}
            liveURL="https://modernmisery.netlify.com"
            github="https://google.com"
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
            projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi nihil voluptatem itaque sapiente amet modi minima officia"
            tags={["Next", "Sass", "Typescript"]}
            github="https://google.com"
            showHome={true}
            animation="slide-right"
          />
          <FurtherProject
            projectName="PUP Hate Tweet Detection System"
            projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi nihil voluptatem itaque sapiente amet modi minima officia"
            tags={["Python", "Machine Learning", "NLP"]}
            github="https://google.com"
            animation="slide-left"
          />
          <FurtherProject
            projectName="Crimson"
            projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi nihil voluptatem itaque sapiente amet modi minima officia"
            tags={["C#", "Winforms", "MySQL"]}
            github="https://google.com"
            animation="slide-down"
          />
          <FurtherProject
            projectName="Paragon"
            projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi nihil voluptatem itaque sapiente amet modi minima officia"
            tags={["Java", "Java Swing", "MySQL"]}
            github="https://google.com"
            animation="slide-up"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
