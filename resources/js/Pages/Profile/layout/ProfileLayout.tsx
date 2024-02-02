import React, { PropsWithChildren, ReactNode } from "react";
import { PageProps, Thought, User } from "@/types";
import ThoughtComponent from "@/Components/ThoughtCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import dayjs from "dayjs";
import { Link, useForm, usePage } from "@inertiajs/react";
import ProfileLogo from "../Partials/ProfileLogo";
import NavLink from "@/Components/NavLink";
import FollowButton from "../Partials/FollowButton";
import AuthLayout from "@/Layouts/AuthLayout";

const ProfileLayout = ({
    follow = false,
    followed_by = false,
    user,
    children,
}: PropsWithChildren<{
    follow?: Boolean;
    followed_by?: Boolean;
    user: User;
    children: ReactNode;
}>) => {
    const { auth } = usePage().props as unknown as PageProps;
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });
    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="flex justify-between items-center">
                <div>
                    <div className="h-24 w-24 p-6 bg-slate-400 rounded-full ">
                        <ProfileLogo />
                    </div>
                    <p className="text-white">{user.name}</p>
                    <p className="text-white">Joined </p>
                    <div className="flex gap-4">
                        <Link
                            href={route("profile.following")}
                            className="text-white"
                        >
                            Following
                        </Link>
                        <Link
                            href={route("profile.followers")}
                            className="text-white"
                        >
                            Followers
                        </Link>
                    </div>
                </div>
                <div className="text-white">
                    {auth.user.id === user.id ? (
                        <Link href={route("settings.edit")}>
                            <p>Settings</p>
                        </Link>
                    ) : (
                        <div>
                            {followed_by ? (
                                follow ? (
                                    <FollowButton
                                        authId={auth.user.id}
                                        userId={user.id}
                                    />
                                ) : (
                                    <FollowButton
                                        authId={auth.user.id}
                                        userId={user.id}
                                        followText="Follow Back"
                                        unfollowText="Follow Back"
                                        colorGreen={true}
                                    />
                                )
                            ) : follow ? (
                                <FollowButton
                                    authId={auth.user.id}
                                    userId={user.id}
                                />
                            ) : (
                                <FollowButton
                                    authId={auth.user.id}
                                    userId={user.id}
                                    followText="Follow"
                                    unfollowText="Follow"
                                    colorGreen={true}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="space-x-8 sm:-my-px sm:ms-10 flex pt-4 justify-center">
                <NavLink
                    href={
                        auth.user.id === user.id
                            ? route("profile.show")
                            : route("thinker.show", user.id)
                    }
                    active={
                        auth.user.id === user.id
                            ? route().current("profile.show")
                            : route().current("thinker.show")
                    }
                >
                    Thoughts
                </NavLink>
                <NavLink
                    href={
                        auth.user.id === user.id
                            ? route("profile.following")
                            : route("thinker.following", user.id)
                    }
                    active={
                        auth.user.id === user.id
                            ? route().current("profile.following")
                            : route().current("thinker.following")
                    }
                >
                    Following
                </NavLink>
                <NavLink
                    href={
                        auth.user.id === user.id
                            ? route("profile.followers")
                            : route("thinker.followers", user.id)
                    }
                    active={
                        auth.user.id === user.id
                            ? route().current("profile.followers")
                            : route().current("thinker.followers")
                    }
                >
                    Followers
                </NavLink>
            </div>
            {children}
            {/* </Authenticated> */}
        </div>
    );
};

export default ProfileLayout;

// ProfileLayout.layout = (page: any) => (
//     <AuthLayout title="Likes">{page}</AuthLayout>
// );

// ProfileLayout.layout = (page: ReactNode) => (
//     <Authenticated
//         // user={auth.user}
//         header={
//             <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
//                 My Profile
//             </h2>
//         }
//         title="Profile"
//         children={page}
//     />
// );
