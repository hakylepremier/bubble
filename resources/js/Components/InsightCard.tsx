import { Insight, PageProps } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import React, { PropsWithChildren, useState } from "react";
import Dropdown from "./Dropdown";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";

dayjs.extend(relativeTime);

const InsightCard = ({ insight }: PropsWithChildren<{ insight: Insight }>) => {
    const { auth } = usePage().props as unknown as PageProps;

    const [editing, setEditing] = useState(false);

    const [liked, setLiked] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: insight.message,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        patch(route("insights.update", insight.id), {
            onSuccess: () => setEditing(false),
        });
    };
    return (
        // border-color: rgb(57 64 86 / var(--tw-border-opacity));
        //     background: #252A37; dark:border-gray-700
        <div className="p-6 flex space-x-2 text-white dark:border-[#427D9D]">
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-[#9BBEC8]">
                            {insight.user_id === auth.user.id
                                ? "You"
                                : insight.user.name}
                        </span>
                        <small className="ml-2 text-sm text-[#427D9D] ">
                            {dayjs(insight.created_at).fromNow()}
                        </small>
                        {insight.created_at !== insight.updated_at && (
                            <small className="text-sm  text-[#427D9D]">
                                {/* text-gray-500 */} &middot; edited
                            </small>
                        )}
                    </div>
                    {insight.user_id === auth.user.id && (
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
                                    href={route("insights.destroy", insight.id)}
                                    method="delete"
                                >
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    )}
                </div>
                {editing ? (
                    <form onSubmit={submit}>
                        <textarea
                            value={data.message}
                            onChange={(e) => setData("message", e.target.value)}
                            className="mt-4 w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 text-white dark:border-gray-700"
                        ></textarea>
                        <InputError message={errors.message} className="mt-2" />
                        <div className="space-x-2">
                            <PrimaryButton className="mt-4">Save</PrimaryButton>
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
                        {insight.message}
                    </p>
                )}
                <div className="flex gap-2 pt-2">
                    {/* <LikeButton insight={insight} /> */}
                    {/* <CommentButton /> */}
                </div>
            </div>
        </div>
    );
};

export default InsightCard;
