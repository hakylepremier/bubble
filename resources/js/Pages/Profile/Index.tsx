import React, { PropsWithChildren, ReactNode } from "react";
import { PageProps, Thought, User } from "@/types";
import ThoughtComponent from "@/Components/ThoughtCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import dayjs from "dayjs";
import { Link, useForm, usePage } from "@inertiajs/react";
import ProfileLogo from "./Partials/ProfileLogo";
import NavLink from "@/Components/NavLink";
import ProfileLayout from "./layout/ProfileLayout";

const Index = ({
    thoughts,
    user,
    auth,
}: PropsWithChildren<{ user: User; thoughts: Thought[]; auth: PageProps }>) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });
    return (
        <div className="text-white pt-6">
            <div className="text-white">
                {thoughts.length !== 0 ? (
                    <div className="mt-6 shadow-sm rounded-lg divide-y bg-[#164863]">
                        {thoughts.map((thought) => (
                            <div
                                className="hover:bg-slate-700"
                                key={thought.id}
                            >
                                <ThoughtComponent
                                    showFollow={false}
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
    );
};

export default Index;

// Index.layout = (page: ReactNode) => <ProfileLayout children={page} />;

Index.layout = (page: any) => {
    const { props } = page;
    const user: User = props.user;
    const follow: Boolean = props.follow;
    const followed_by: Boolean = props.followed_by;
    // const { user, auth } = usePage().props as unknown as PageProps;
    // const user = props.user;
    return (
        // <div className="bg-gray-700">{page}</div>
        <Authenticated
            // user={usePage().props.auth.user as unknown as PageProps}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    My Profile
                </h2>
            }
            title="Profile"
            // children={page}
        >
            {/* {page} */}
            <ProfileLayout
                follow={follow}
                followed_by={followed_by}
                user={user}
                children={page}
            />
        </Authenticated>
    );
};
