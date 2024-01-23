import React, { PropsWithChildren } from "react";
import { PageProps, Thought } from "@/types";
import ThoughtComponent from "@/Components/ThoughtCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";

const ThoughtPage = ({ thoughts }: PageProps<{ thoughts: Thought[] }>) => {
    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="text-white">
                <div className="mt-6 shadow-sm rounded-lg divide-y bg-[#164863]">
                    {thoughts.length !== 0 ? (
                        thoughts.map((thought) => (
                            <ThoughtComponent
                                key={thought.id}
                                thought={thought}
                                // auth={auth}
                            />
                        ))
                    ) : (
                        <div>
                            <h3 className="text-xl">
                                You have not liked any shower thoughts.
                            </h3>
                            <p>
                                Like some thought bubbles to see them appear
                                here.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThoughtPage;

ThoughtPage.layout = (page: any) => (
    <AuthLayout title="Likes">{page}</AuthLayout>
);
