import { myPhoto } from "../assets";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <AnimationOnScroll
      delay={200}
      animateOnce={true}
      animateIn="animate-fade-in"
    >
      <article className="pt-56 px-36" id="about">
        <div>
          <h1 className="text-[32px] text-secondary-500 font-montserrat about-me-title-1">
            #<span className="text-tertiary about-me-title-3">about-me</span>
            &#123;
          </h1>
          <div className="flex mx-20 row-about-me">
            <div className="flex-none mt-8 rounded bg-secondary-500 hover:bg-transparent transition duration-300 ease-in w-[150px] h-[150px]">
              <img
                className="rounded opacity-[0.8] hover:animate-shadow-drop-br"
                src={myPhoto}
                alt="a photo of my face"
              />
            </div>
            <div className="ml-10 mt-7">
              <p className="text-[#8892b0] text-[21px] about-me-text">
                Hello, my name is
                <span className="text-secondary-500"> James Segundo</span>, an
                aspiring web developer with a degree in
                <span className="text-secondary-500">
                  &nbsp;Computer Engineering
                </span>
                .<br />I have a good background in programming languages and
                tools such as
                <span className="text-secondary-500">&nbsp;C</span>,
                <span className="text-secondary-500">&nbsp;C#</span>,
                <span className="text-secondary-500">&nbsp;Python</span>,
                <span className="text-secondary-500">&nbsp;Java</span>,
                <span className="text-secondary-500">&nbsp;HTML</span>,
                <span className="text-secondary-500">&nbsp;CSS</span>,
                <span className="text-secondary-500">&nbsp;JavaScript</span>,
                <span className="text-secondary-500">&nbsp;Bootstrap</span>,
                <span className="text-secondary-500">&nbsp;Tailwind CSS</span>,
                <span className="text-secondary-500">&nbsp;ReactJS</span>,
                <span className="text-secondary-500">&nbsp;ExpressJS</span>, and
                <span className="text-secondary-500">&nbsp;SQL</span>
                .
                <br />I also acquire basic knowledge about
                <span className="text-secondary-500">
                  &nbsp;Object-Oriented Programming
                </span>
                ,
                <span className="text-secondary-500">
                  &nbsp;Android Development
                </span>
                , and
                <span className="text-secondary-500">
                  &nbsp;Software Development
                </span>
                .
              </p>
            </div>
          </div>
          <h1 className="mt-8 pb-96 text-[32px] text-secondary-500 font-montserrat about-me-title-2">
            &#125;
          </h1>
        </div>
      </article>
    </AnimationOnScroll>
  );
};

export default About;
