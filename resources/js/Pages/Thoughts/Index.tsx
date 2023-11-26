import React, { PropsWithChildren } from "react";
import { PageProps, Thought } from "@/types";
import ThoughtComponent from "@/Components/ThoughtCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { Link, useForm } from "@inertiajs/react";

const Index = ({ thoughts }: PageProps<{ thoughts: Thought[] }>) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("thoughts.store"), { onSuccess: () => reset() });
    };
    return (
        <Authenticated
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    My Shower Thoughts
                </h2>
            }
            title="Shower Thoughts"
        >
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 text-white dark:border-gray-700"
                        onChange={(e) => setData("message", e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>
                        Submit
                    </PrimaryButton>
                </form>

                <div className="text-white">
                    {thoughts.length !== 0 ? (
                        <div className="mt-6 shadow-sm rounded-lg divide-y bg-[#164863]">
                            {thoughts.map((thought) => (
                                <div
                                    className="hover:bg-slate-700"
                                    key={thought.id}
                                >
                                    <ThoughtComponent
                                        key={thought.id}
                                        thought={thought}
                                        // auth={auth}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className=" text-center pt-6 text-white">
                            <h3 className="text-xl">
                                You have not added any shower thoughts.
                            </h3>
                            <p>Let people here what you have to say</p>
                        </div>
                    )}
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
