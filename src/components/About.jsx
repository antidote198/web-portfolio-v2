import { myPhoto } from '../assets';

const About = () => {
    return (
        <article class="pt-56 px-36" id="about">
            <div>
                <h1 class="text-[32px] text-secondary font-montserrat about-me-title-1">
                    #
                    <span class="text-tertiary about-me-title-3">about-me</span>
                    &#123;
                </h1>
                <div class="flex mx-20 row-about-me">
                    <div class="flex-none mt-8 rounded bg-secondary hover:bg-transparent transition duration-300 ease-in w-[150px] h-[150px] my-photo-container">
                        <img
                            class="rounded opacity-[0.8] profile-photo"
                            src={myPhoto}
                            alt="a photo of my face"
                        />
                    </div>
                    <div class="ml-10 mt-8">
                        <p class="text-[#8892b0] text-[24px] about-me-text">
                            Hello, my name is
                            <span class="text-secondary"> James Segundo</span>,
                            an aspiring web developer with a degree in
                            <span class="text-secondary">
                                &nbsp;Computer Engineering
                            </span>
                            . I have a good background in programming languages
                            and tools such as
                            <span class="text-secondary">&nbsp;C</span>,
                            <span class="text-secondary">&nbsp;C#</span>,
                            <span class="text-secondary">&nbsp;Python</span>,
                            <span class="text-secondary">&nbsp;Java</span>,
                            <span class="text-secondary">&nbsp;HTML</span>,
                            <span class="text-secondary">&nbsp;CSS</span>,
                            <span class="text-secondary">&nbsp;Bootstrap</span>,
                            <span class="text-secondary">&nbsp;JavaScript</span>
                            , and
                            <span class="text-secondary">&nbsp;SQL</span>. I
                            also acquire basic knowledge about
                            <span class="text-secondary">
                                &nbsp;Object-Oriented Programming
                            </span>
                            ,
                            <span class="text-secondary">
                                &nbsp;Android Development
                            </span>
                            , and
                            <span class="text-secondary">
                                &nbsp;Software Development
                            </span>
                            .
                        </p>
                    </div>
                </div>
                <h1 class="mt-8 pb-96 text-[32px] text-secondary font-montserrat about-me-title-2">
                    &#125;
                </h1>
            </div>
        </article>
    );
};

export default About;
