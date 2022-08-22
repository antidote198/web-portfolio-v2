import React from 'react';

const Navbar = () => {
    return (
        <nav className="p-4 bg-primary shadow-xl sticky top-0 z-10">
            <div>
                <span className="xl:text-[2rem] sm:text-[1rem] ml-5 text-secondary font-plus-jakarta-sans cursor-pointer">
                    &lt;JS&gt;
                </span>
                <ul className="float-right mr-5 mt-1">
                    <li className="inline-block mr-5">
                        <a
                            href="#"
                            className="text-secondary font-montserrat hover:border-b-4 border-secondary cursor-pointer"
                        >
                            HOME
                        </a>
                    </li>
                    <li className="inline-block mr-5">
                        <a
                            href="#about"
                            className="text-secondary font-montserrat hover:border-b-4 border-secondary cursor-pointer"
                        >
                            ABOUT
                        </a>
                    </li>
                    <li className="inline-block mr-5">
                        <a
                            href="#projects"
                            className="text-secondary font-montserrat hover:border-b-4 border-secondary cursor-pointer"
                        >
                            PROJECTS
                        </a>
                    </li>
                    <li className="inline-block mr-5">
                        <a
                            href="#skills"
                            className="text-secondary font-montserrat hover:border-b-4 border-secondary cursor-pointer"
                        >
                            SKILLS
                        </a>
                    </li>
                    <button className="inline-block mr-5 p-1 text-primary px-4 py-2 rounded-full bg-secondary hover:bg-[#2ADFBE] btnContact">
                        CONTACT
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
