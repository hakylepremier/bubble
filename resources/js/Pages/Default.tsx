// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
// import bgImage from "./assets/bg-image.webp"

import type { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import BGIMAGE from "../../images/bg-image.webp";
import { useState } from "react";

// import Feature from "./components/Features";
const Feature = ({
    title,
    description,
}: {
    title: string;
    description?: string;
}) => {
    return (
        <>
            <li>
                <details className="transition-all duration-300 ease-in-out">
                    <summary className="flex items-center justify-between gap-4 p-4 list-none transition-all duration-300 ease-in-out bg-gray-200 rounded-lg cursor-pointer">
                        <h4>{title}</h4>
                        {/* <i className="text-lg fa-brands fa-facebook" /> */}
                        <div className="relative z-10 w-4 h-4">
                            <i className="absolute top-0 right-0 fa-solid fa-chevron-down detail-open" />
                            <i className="absolute top-0 right-0 fa-solid fa-chevron-up detail-close" />
                        </div>
                    </summary>
                    <p className="p-2">{description}</p>
                </details>
            </li>
        </>
    );
};

function Home({ auth }: PageProps) {
    const [expanded, setExpanded] = useState(false);

    const toggleOpen = () => {
        setExpanded(!expanded);
    };

    const videoAdded = false;

    const actions = [
        {
            name: "Try out the features with a dummy account",
            atext: "here",
            href: "/login",
        },
        {
            name: "Explore the list of features added and planned",
            atext: "here",
            href: "#features",
        },
        {
            name: "Learn more about the project, like what technology is being used, how it's being developed and many more",
            atext: "here",
            href: "https://humphreyyeboah.com/projects/bubble",
        },
        // {
        //     name: "Watch a Youtube video walkthrough of the features that have been added thus far",
        //     atext: "here",
        //     href: "#video-walkthrough",
        // },
    ];

    const completeFeatures = [
        {
            name: "Create a thought(this is what I use to represent a shower	thought)",
            description:
                "You can create a thought to be shared with others on the site",
        },
        {
            name: "Create an insight(this is what I use to represent an insight about a shower thought)",
            description:
                "You can create an insight to reply to other people's shower thoughts",
        },
        {
            name: "Edit a thought",
            description:
                "You can make changes to any shower thought you post whenever you like",
        },
        {
            name: "Delete a thought",
            description: "You can delete the thoughts you create",
        },
    ];

    const pendingFeatures = [
        {
            name: "Get recommendations based on the thinkers you follow",
            description:
                "Recommendations shown on the homepage will be based on the thinkers you follow.",
        },
        {
            name: "Get recommendations based on your liked thoughts",
            description:
                "Recommendations shown on the homepage will also be based on your likes",
        },
        {
            name: "Complete the new UI",
            description:
                "In order to finish the backend I used a simpler UI which I have now redesigned. I will be replacing all the pages with the new design.",
        },
        {
            name: "Add chat functionality",
            description: "Adding the ability to chat with other thinkers",
        },
    ];
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                />
            </Head>
            <main className="text-slate-600">
                <header className="relative flex flex-col items-center justify-center w-full min-h-screen gap-4 px-8 py-10 border-b-2 border-gray-200 font-poppins">
                    <div className="fixed top-0 right-0 z-20 flex flex-col items-end p-4 px-4 sm:p-6 text-end sm:block">
                        {auth.user ? (
                            <Link
                                href={route("home")}
                                className="font-semibold text-gray-600 hover:text-gray-900 relative top-0 left-0 active:top-1 active:left-1 transition-all ease-in focus:outline focus:outline-2 focus:rounded-3xl focus:outline-teal-400 bg-gray-200 px-4 py-2 hover:bg-white active:shadow-[6px_6px_1px_rgba(15,_118,_110,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:shadow-[10px_10px_1px_rgba(23,_169,_148,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-3xl shadow-[10px_10px_1px_rgba(15,_118,_110,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
                            >
                                Home
                            </Link>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    className="font-semibold text-gray-600 hover:text-gray-900 relative top-0 left-0 active:top-1 active:left-1 transition-all ease-in focus:outline focus:outline-2 focus:rounded-3xl focus:outline-teal-400 bg-gray-200 px-4 py-2 hover:bg-white active:shadow-[6px_6px_1px_rgba(15,_118,_110,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:shadow-[10px_10px_1px_rgba(23,_169,_148,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-3xl shadow-[10px_10px_1px_rgba(15,_118,_110,_1),_0_10px_20px_rgba(204,_204,_204,_1)] sm:hidden block"
                                    onClick={toggleOpen}
                                >
                                    {/* {expanded ? (
                                        <i className="fa-solid fa-xmark" />
                                    ) : (
                                        <i className="fa-solid fa-bars" />
                                    )} */}
                                    <i
                                        className={`fa-solid transition-all ${
                                            expanded ? "fa-xmark" : "fa-bars"
                                        }`}
                                    />
                                </button>
                                <div className="relative">
                                    <div
                                        className={`space-x-2 py-4 transition-all sm:block flex flex-col gap-4 sm:static absolute top-0  ${
                                            expanded ? "right-0" : "-right-40"
                                        }`}
                                    >
                                        <Link
                                            href={route("login")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 relative top-0 left-0 active:top-1 active:left-1 transition-all ease-in focus:outline focus:outline-2 focus:rounded-3xl focus:outline-teal-400 bg-gray-200 px-8 py-2 hover:bg-white active:shadow-[6px_6px_1px_rgba(15,_118,_110,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:shadow-[10px_10px_1px_rgba(23,_169,_148,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-3xl shadow-[10px_10px_1px_rgba(15,_118,_110,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
                                        >
                                            Log in
                                        </Link>

                                        <Link
                                            href={route("register")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 relative top-0 left-0 active:top-1 active:left-1 transition-all ease-in focus:outline focus:outline-2 focus:rounded-3xl focus:outline-teal-400 bg-gray-200 px-8 py-2 hover:bg-white active:shadow-[6px_6px_1px_rgba(15,_118,_110,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:shadow-[10px_10px_1px_rgba(23,_169,_148,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-3xl shadow-[10px_10px_1px_rgba(15,_118,_110,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <h1 className="max-w-6xl mx-auto text-4xl font-bold text-center text-teal-700 sm:text-6xl font-merriweather ">
                        Share your shower thoughts with the world on Bubble
                    </h1>
                    <div className="max-w-6xl mx-auto">
                        <p className="pb-6 text-xl text-center text-slate-600 font-inter">
                            Bubble is currently still under development but you
                            can:
                        </p>
                        <ul className="flex flex-col gap-4 rounded-lg font-inter">
                            {actions.map((action, index) => (
                                <li
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    key={index}
                                    className="px-8 py-4 bg-white rounded-xl shadow-[10px_10px_1px_rgba(15,_118,_110,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
                                >
                                    {action.name}{" "}
                                    <a
                                        href={action.href}
                                        className="font-bold text-teal-500 border-b-[3px] border-teal-500"
                                    >
                                        {action.atext}
                                    </a>
                                    .
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-cover md:bg-center bg-[left_-17rem_top_-2rem] blur bg-ttuPattern position -z-10"
                        style={{ backgroundImage: `url('${BGIMAGE}')` }}
                    />
                </header>
                {/* <section className="flex flex-col items-center justify-center w-full min-h-screen px-8 py-16 bg-gray-100 lg:px-6">
					<h2>Gallery</h2>
				</section> */}
                {videoAdded && (
                    <section
                        className="flex flex-col items-center justify-center w-full py-32 sm:min-h-screen sm:py-16"
                        id="video-walkthrough"
                    >
                        <h2 className="pb-4 text-3xl font-bold text-center text-teal-700 font-merriweather">
                            Video walkthrough
                        </h2>
                        <iframe
                            // width="1035"
                            // height="582"
                            className="max-w-3xl md:w-2/3 w-4/5  aspect-video p-4 bg-slate-400 rounded-lg shadow-[0px_10px_1px_rgba(211,_211,_211,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
                            src="https://www.youtube.com/embed/e2nkq3h1P68"
                            title="Learn Accessibility - Full a11y Tutorial"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        <details className="w-full mt-6 transition-all duration-300 ease-in-out">
                            <summary className="flex items-center justify-between w-4/5 max-w-3xl gap-4 p-4 m-auto list-none transition-all duration-300 ease-in-out bg-gray-200 rounded-lg cursor-pointer md:w-2/3 ">
                                <h4>Previous Video Updates</h4>
                                {/* <i className="text-lg fa-brands fa-facebook" /> */}
                                <div className="relative w-4 h-4">
                                    <i className="absolute top-0 right-0 fa-solid fa-chevron-down detail-open" />
                                    <i className="absolute top-0 right-0 fa-solid fa-chevron-up detail-close" />
                                </div>
                            </summary>
                            <div className="w-4/5 max-w-3xl px-8 py-4 m-auto md:w-2/3">
                                <iframe
                                    // width="1035"
                                    // height="582"
                                    className="w-full p-4 m-auto rounded-lg aspect-video bg-slate-400"
                                    src="https://www.youtube.com/embed/e2nkq3h1P68"
                                    title="Learn Accessibility - Full a11y Tutorial"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </details>
                    </section>
                )}
                <section
                    id="features"
                    className="flex flex-col items-center justify-center w-full min-h-screen px-8 py-16 bg-gray-100 lg:px-6"
                >
                    <h2 className="pb-4 text-3xl font-bold text-center text-teal-700 font-merriweather">
                        Features
                    </h2>
                    <div className="flex flex-col max-w-5xl gap-12 lg:gap-8 lg:flex-row">
                        <article className="flex-1">
                            <h3 className="pb-4 text-xl text-center text-teal-600 lg:pl-4 lg:text-left font-merriweather">
                                Completed Features
                            </h3>
                            <ul className="space-y-5 rounded-xl shadow-[10px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-6">
                                {completeFeatures.map((feature, index) => (
                                    <Feature
                                        title={feature.name}
                                        description={feature.description}
                                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                        key={index}
                                    />
                                ))}
                            </ul>
                        </article>
                        <article className="flex-1">
                            <h3 className="pb-4 text-xl text-center text-teal-600 lg:pl-4 lg:text-left font-merriweather">
                                Pending Features
                            </h3>
                            <ul className="space-y-5 rounded-xl shadow-[10px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-6">
                                {pendingFeatures.map((feature, index) => (
                                    <Feature
                                        title={feature.name}
                                        description={feature.description}
                                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                        key={index}
                                    />
                                ))}
                            </ul>
                        </article>
                    </div>
                </section>
            </main>
            <footer className="px-0 py-8 lg:px-0 md:px-8">
                <div className="flex max-w-4xl gap-4 px-8 pb-6 m-auto border-b border-gray-600 md:px-0 ">
                    <article className="flex-1">
                        <h2 className="pb-2 text-lg font-bold text-teal-700 uppercase">
                            Humphrey Yeboah
                        </h2>
                        <p>
                            A full stack and mobile developer ready to help to
                            bring your business online.
                        </p>
                    </article>
                    <article>
                        <h2 className="pb-2 text-lg font-bold text-teal-700 uppercase">
                            Socials
                        </h2>
                        <div className="grid grid-cols-2 sm:block">
                            <a
                                href="https://www.linkedin.com/in/humphrey-yeboah-9850881b3/"
                                className="p-2 transition-colors rounded hover:dark:bg-gray-800 hover:bg-gray-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Humphrey Yeboah on LinkedIn"
                            >
                                <i className="text-lg fa-brands fa-linkedin" />
                            </a>
                            <a
                                href="https://www.twitter.com/hakylepremier"
                                className="p-2 transition-colors rounded hover:dark:bg-gray-800 hover:bg-gray-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Humphrey Yeboah on Twitter"
                            >
                                <i className="text-lg fa-brands fa-x-twitter" />
                            </a>
                            <a
                                href="https://github.com/hakylepremier"
                                className="p-2 transition-colors rounded hover:dark:bg-gray-800 hover:bg-gray-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Humphrey Yeboah on Github"
                            >
                                <i className="text-lg fa-brands fa-github" />
                            </a>
                            <a
                                href="https://facebook.com/humphrey.yeboah.5"
                                className="p-2 transition-colors rounded hover:dark:bg-gray-800 hover:bg-gray-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Humphrey Yeboah on Facebook"
                            >
                                <i className="text-lg fa-brands fa-facebook" />
                            </a>
                        </div>
                    </article>
                </div>
                <p className="px-8 pt-6 text-center">
                    &copy; Copyright {new Date().getFullYear()}, Made by{" "}
                    <a
                        href="http://humphreyyeboah.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pb-1 font-bold text-teal-700 border-b text-inherit dark:border-b-white hover:text-neutral hover:dark:text-gray-300 border-b-gray-600"
                    >
                        Humphrey Yeboah
                    </a>
                </p>
                <p className="pt-4 text-center">
                    <a
                        href="https://www.pexels.com/photo/flat-lay-photography-of-macbook-pro-beside-white-spiral-notebook-and-green-mug-434337/"
                        className="text-center text-gray-300 border-b-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Photo by Pixabay
                    </a>
                </p>
            </footer>
        </>
    );
}

export default Home;
