import React from 'react';

const Navbar = () => {
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove('scroll-up');
            return;
        }

        if (
            currentScroll > lastScroll &&
            !body.classList.contains('scroll-down')
        ) {
            body.classList.remove('scroll-up');
            body.classList.add('scroll-down');
        } else if (
            currentScroll < lastScroll &&
            body.classList.contains('scroll-down')
        ) {
            body.classList.remove('scroll-down');
            body.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    return (
        <nav className="p-4 bg-primary shadow-xl sticky top-0 z-10 transition duration-300 ease-in">
            <div>
                <span className="xl:text-[2rem] sm:text-[1rem] ml-5 text-secondary-500 font-plus-jakarta-sans cursor-pointer">
                    &lt;JS&gt;
                </span>
                <ul className="float-right mr-5 mt-1">
                    <li className="inline-block mr-5">
                        <a
                            href="#"
                            className="text-secondary-500 font-montserrat hover:border-b-4 border-secondary-500 cursor-pointer"
                        >
                            HOME
                        </a>
                    </li>
                    <li className="inline-block mr-5">
                        <a
                            href="#about"
                            className="text-secondary-500 font-montserrat hover:border-b-4 border-secondary-500 cursor-pointer"
                        >
                            ABOUT
                        </a>
                    </li>
                    <li className="inline-block mr-5">
                        <a
                            href="#projects"
                            className="text-secondary-500 font-montserrat hover:border-b-4 border-secondary-500 cursor-pointer"
                        >
                            PROJECTS
                        </a>
                    </li>
                    <li className="inline-block mr-5">
                        <a
                            href="#skills"
                            className="text-secondary-500 font-montserrat hover:border-b-4 border-secondary-500 cursor-pointer"
                        >
                            SKILLS
                        </a>
                    </li>
                    <button className="inline-block mr-5 p-1 text-primary px-4 py-2 rounded-full bg-secondary-500 hover:bg-[#2ADFBE] btnContact">
                        CONTACT
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
