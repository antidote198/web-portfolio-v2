import { eCommerce, pos, emr } from '../assets';

const Projects = () => {
    return (
        <article class="pt-24 px-36" id="projects">
            <div>
                <h1 class="text-[32px] text-secondary font-montserrat projects-title-1">
                    &lt;
                    <span class="text-[32px] text-tertiary font-montserrat project-title-3">
                        projects
                    </span>
                    &gt;
                </h1>
                <div class="flex flex-wrap -m-4 mt-8">
                    <div class="p-4 sm:w-1/2 lg:w-1/3">
                        <div class="h-[520px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div class="bg-secondary hover:bg-transparent transition duration-300 ease-in">
                                <img
                                    class="lg:h-72 md:h-48 w-full object-cover object-center opacity-[0.8]"
                                    src={eCommerce}
                                    alt="blog"
                                />
                            </div>
                            <div class="p-6 hover:bg-secondary text-tertiary hover:text-primary transition duration-300 ease-in">
                                <h2 class="text-base font-medium mb-1">
                                    August 05, 2022
                                </h2>
                                <h1 class="text-2xl font-semibold mb-3">
                                    E-Commerce API
                                </h1>
                                <p class="leading-relaxed mb-3">
                                    Fully functional E-Commerce API built using
                                    Express.js, Mongoose, Bcrypt, jsonwebtoken
                                    and nodemon.
                                </p>
                                <div class="flex items-center flex-wrap">
                                    <a
                                        class="inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                                        href="https://gitlab.com/batch-198-segundo/capstone2-segundo"
                                        target="_blank"
                                    >
                                        Read More
                                        <svg
                                            class="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <span class="text-primary mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-primary">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>
                                        10
                                    </span>
                                    <span class="text-primary inline-flex items-center leading-none text-sm">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                        0
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/3">
                        <div class="h-[520px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div class="bg-secondary hover:bg-transparent transition duration-300 ease-in">
                                <img
                                    class="lg:h-72 md:h-48 w-full object-cover object-center opacity-[0.8]"
                                    src={pos}
                                    alt="blog"
                                />
                            </div>
                            <div class="p-6 hover:bg-secondary text-tertiary hover:text-primary transition duration-300 ease-in">
                                <h2 class="text-base font-medium mb-1">
                                    July 18, 2016
                                </h2>
                                <h1 class="text-2xl font-semibold mb-3">
                                    Point Of Sale System
                                </h1>
                                <p class="leading-relaxed mb-3">
                                    Fully functional POS System built using C#
                                    Windows Form Application with PostgreSQL.
                                    <br />
                                    <br />
                                </p>
                                <div class="flex items-center flex-wrap">
                                    <a class="inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                                        Read More
                                        <svg
                                            class="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <span class="text-primary mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-primary">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>
                                        5
                                    </span>
                                    <span class="text-primary inline-flex items-center leading-none text-sm">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                        0
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/3">
                        <div class="h-[520px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <div class="bg-secondary hover:bg-transparent transition duration-300 ease-in">
                                <img
                                    class="lg:h-72 md:h-48 w-full object-cover object-center opacity-[0.8]"
                                    src={emr}
                                    alt="blog"
                                />
                            </div>
                            <div class="p-6 hover:bg-secondary text-tertiary hover:text-primary transition duration-300 ease-in">
                                <h2 class="text-base font-medium mb-1">
                                    August 24, 2018
                                </h2>
                                <h1 class="text-2xl font-semibold mb-3">
                                    Electronic Medical Records
                                </h1>
                                <p class="leading-relaxed mb-3">
                                    Fully functional EMR System built using C#
                                    Windows Form Application with PostgreSQL.
                                    <br />
                                    <br />
                                </p>
                                <div class="flex items-center flex-wrap">
                                    <a class="inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                                        Read More
                                        <svg
                                            class="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <span class="text-primary mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-primary">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>
                                        3
                                    </span>
                                    <span class="text-primary inline-flex items-center leading-none text-sm">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                        0
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 class="text-[32px] text-secondary font-montserrat mt-8 projects-title-2">
                    &lt;/
                    <span class="text-[32px] text-tertiary font-montserrat project-title-3">
                        projects
                    </span>
                    &gt;
                </h1>
            </div>
        </article>
    );
};

export default Projects;
