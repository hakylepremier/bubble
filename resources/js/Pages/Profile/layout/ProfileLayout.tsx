import React, { PropsWithChildren, ReactNode } from "react";
import { PageProps, Thought } from "@/types";
import ThoughtComponent from "@/Components/ThoughtCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import dayjs from "dayjs";
import { Link, useForm, usePage } from "@inertiajs/react";
import ProfileLogo from "../Partials/ProfileLogo";
import NavLink from "@/Components/NavLink";

const ProfileLayout = ({
    children,
    test,
}: PageProps<{ children: ReactNode; test: String | undefined }>) => {
    const { auth } = usePage().props as unknown as PageProps;
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });
    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="h-24 w-24 p-6 bg-slate-400 rounded-full ">
                <ProfileLogo />
            </div>
            <p className="text-white">{auth.user.name}</p>
            <p className="text-white">Joined {auth.user.email_verified_at}</p>
            <p className="text-white">{test}</p>
            <div className="flex gap-4">
                <Link href={route("profile.following")} className="text-white">
                    Following
                </Link>
                <Link href={route("profile.followers")} className="text-white">
                    Followers
                </Link>
            </div>
            <div className="space-x-8 sm:-my-px sm:ms-10 flex pt-4 justify-center">
                <NavLink
                    href={route("profile.show")}
                    active={route().current("profile.show")}
                >
                    Thoughts
                </NavLink>
                <NavLink
                    href={route("profile.following")}
                    active={route().current("profile.following")}
                >
                    Following
                </NavLink>
                <NavLink
                    href={route("profile.followers")}
                    active={route().current("profile.followers")}
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
