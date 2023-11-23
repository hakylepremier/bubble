import { PageProps, Thought } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import React, { PropsWithChildren, useEffect, useState } from "react";

const LikeButton = ({ thought }: PropsWithChildren<{ thought: Thought }>) => {
    const { auth } = usePage().props as unknown as PageProps;
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        let length = thought.likes.length;
        thought.likes.length === 0 && setLiked(true);
    }, []);
    return (
        <div className="text-blue-800">
            {thought.likes[0] ? (
                <Link
                    as="button"
                    href={route("likes.destroy", thought.likes[0].id)}
                    method="delete"
                    onSuccess={() => setLiked(true)}
                    preserveScroll
                    type="button"
                    className={
                        "px-4 py-2 text-start text-sm leading-5  text-gray-300 dark:text-gray-800  hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none  transition duration-150 ease-in-out "
                    }
                >
                    <svg
                        className={"h-6 w-6  -scale-x-100"}
                        viewBox="0 0 24 24"
                        stroke="#1f2937"
                        strokeWidth="0.125rem"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                            fill="currentColor"
                        />
                    </svg>
                </Link>
            ) : (
                <Link
                    as="button"
                    href={route("likes.store")}
                    method="post"
                    data={{
                        thought_id: thought.id,
                        user_id: auth.user.id,
                    }}
                    onSuccess={() => setLiked(true)}
                    preserveScroll
                    type="button"
                    className={
                        "px-4 py-2 text-start text-sm leading-5 dark:text-transparent text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none transition duration-150 ease-in-out "
                    }
                >
                    <svg
                        className={"h-6 w-6  -scale-x-100"}
                        viewBox="0 0 24 24"
                        stroke="#1f2937"
                        strokeWidth="0.125rem"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                            fill="currentColor"
                        />
                    </svg>
                </Link>
            )}
        </div>
    );
};

export default LikeButton;
