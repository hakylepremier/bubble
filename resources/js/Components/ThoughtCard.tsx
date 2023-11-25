import React, { PropsWithChildren, useEffect, useState } from "react";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link, useForm, usePage } from "@inertiajs/react";
import { PageProps, Thought } from "@/types";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";

dayjs.extend(relativeTime);

export default function ThoughtCard({
    thought,
}: PropsWithChildren<{ thought: Thought }>) {
    const { auth } = usePage().props as unknown as PageProps;

    const [editing, setEditing] = useState(false);

    const [liked, setLiked] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: thought.message,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        patch(route("thoughts.update", thought.id), {
            onSuccess: () => setEditing(false),
        });
    };

    useEffect(() => {
        let length = thought.likes.length;
        thought.likes.length === 0 && setLiked(true);
    }, []);
    return (
        // border-color: rgb(57 64 86 / var(--tw-border-opacity));
        //     background: #252A37; dark:border-gray-700
        <div className="p-6 flex space-x-2 text-white dark:border-gray-700">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#9BBEC8] -scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            </svg>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-[#9BBEC8]">
                            {thought.user.name}
                        </span>
                        <small className="ml-2 text-sm text-[#427D9D] ">
                            {dayjs(thought.created_at).fromNow()}
                        </small>
                        {thought.created_at !== thought.updated_at && (
                            <small className="text-sm  text-[#427D9D]">
                                {/* text-gray-500 */} &middot; edited
                            </small>
                        )}
                    </div>
                    {thought.user.id === auth.user.id ? (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-[#9BBEC8]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button
                                    className="block w-full px-4 py-2 text-left text-sm leading-5 text-white dark:hover:bg-gray-800  focus:bg-gray-100 transition duration-150 ease-in-out"
                                    onClick={() => setEditing(true)}
                                >
                                    Edit
                                </button>
                                <Dropdown.Link
                                    as="button"
                                    href={route("thoughts.destroy", thought.id)}
                                    method="delete"
                                >
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    ) : (
                        <div>
                            <Link
                                href={route("profile.following.store")}
                                method="post"
                                data={{
                                    followed_user_id: thought.user.id,
                                    follower_user_id: auth.user.id,
                                }}
                                as="button"
                                preserveScroll
                                type="button"
                            >
                                {thought.user.followers.length === 0 ? (
                                    <p className="text-bold">Follow</p>
                                ) : (
                                    <p className="text-gray-400  ">Following</p>
                                )}
                            </Link>
                        </div>
                    )}
                </div>
                <Link href={route("thoughts.show", thought.id)}>
                    {editing ? (
                        <form onSubmit={submit}>
                            <textarea
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                                className="mt-4 w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 text-white dark:border-gray-700"
                            ></textarea>
                            <InputError
                                message={errors.message}
                                className="mt-2"
                            />
                            <div className="space-x-2">
                                <PrimaryButton className="mt-4">
                                    Save
                                </PrimaryButton>
                                <button
                                    className="mt-4"
                                    onClick={() => {
                                        setEditing(false);
                                        reset();
                                        clearErrors();
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <p className="mt-4 text-lg text-[#DDF2FD]">
                            {thought.message}
                        </p>
                    )}
                </Link>
                {thought.user.id !== auth.user.id && (
                    <div className="flex gap-2 pt-2">
                        <LikeButton thought={thought} />
                        <CommentButton />
                    </div>
                )}
                {/* Post::with(['likes' => function() use ($user_id) { $q->where('user_id','=', $user_id); }])->all(); */}
                {/* <div className="text-blue-800">
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
                </div> */}
            </div>
        </div>
    );
}
