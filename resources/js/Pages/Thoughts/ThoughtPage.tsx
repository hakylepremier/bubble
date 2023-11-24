import InputError from "@/Components/InputError";
import InsightCard from "@/Components/InsightCard";
import PrimaryButton from "@/Components/PrimaryButton";
import ThoughtCard from "@/Components/ThoughtCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, Thought, ThoughtInsight } from "@/types";
import { useForm } from "@inertiajs/react";
import React from "react";

const ThoughtPage = ({ thought }: PageProps<{ thought: ThoughtInsight }>) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
        thought_id: thought.id,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("insights.store"), { onSuccess: () => reset() });
    };
    return (
        <Authenticated
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            //         My Shower Thoughts
            //     </h2>
            // }
            title="Thought Bubble"
        >
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <ThoughtCard
                    // key={thought.id}
                    thought={thought}
                    // auth={auth}
                />
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="Have any insights?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 text-white dark:border-gray-700"
                        onChange={(e) => setData("message", e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>
                        Submit
                    </PrimaryButton>
                </form>

                <div className="text-white">
                    <div className="mt-9 shadow-sm rounded-lg divide-y">
                        {thought.insights.length !== 0 ? (
                            thought.insights.map((insight) => (
                                <InsightCard
                                    key={insight.id}
                                    insight={insight}
                                />
                            ))
                        ) : (
                            <div className=" text-center ">
                                <h3 className="text-xl">
                                    There have been no insights aded to this
                                    thought.
                                </h3>
                                <p>Let people here what you have to say</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default ThoughtPage;
