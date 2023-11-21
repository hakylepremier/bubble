import React, { PropsWithChildren } from "react";
import { PageProps, Thought } from "@/types";
import ThoughtComponent from "@/Components/ThoughtCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const ThoughtPage = ({
    auth,
    thoughts,
}: PageProps<{ thoughts: Thought[] }>) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    My Shower Thoughts
                </h2>
            }
        >
            <div className="text-white p-6">
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

export default ThoughtPage;
