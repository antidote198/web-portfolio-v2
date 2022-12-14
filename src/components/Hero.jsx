import { useState } from 'react';

const Hero = () => {
    const [toggle, setToggle] = useState(false);

    let prevScrollPos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            document.getElementById('scrollDownButton').style.visibility =
                'initial';
        } else {
            document.getElementById('scrollDownButton').style.visibility =
                'hidden';
        }
        prevScrollPos = currentScrollPos;
    };

    return (
        <div>
            <section>
                <div className="landing-animation">
                    <h1 className="text-[50px] first-text-greeting">
                        Hi there! :)
                    </h1>
                    <h1 className="text-[35px] second-text-greeting">
                        I'm James, nice to meet you!
                    </h1>
                    <p className="text-[25px] subtitle">
                        Welcome to my portfolio.
                    </p>
                </div>
            </section>
            <a href="#about">
                <div
                    className={`${
                        toggle ? 'hidden' : 'visible'
                    } flex justify-center cursor-pointer animate-slide-in-blurred-top`}
                    onClick={() => setToggle((prev) => !prev)}
                    id="scrollDownButton"
                >
                    <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-secondary-500"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Hero;
