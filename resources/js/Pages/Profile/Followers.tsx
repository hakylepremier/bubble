import React, { PropsWithChildren, ReactNode } from "react";
import ProfileLayout from "./layout/ProfileLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import ThinkerCard from "./Partials/ThinkerCard";
import AuthLayout from "@/Layouts/AuthLayout";

const Followers = ({ followers }: PropsWithChildren<{ followers: User[] }>) => {
    return (
        <div className="max-w-2xl">
            <div className="flex flex-col gap-4 pt-3">
                {followers.length !== 0 ? (
                    followers.map((follows) => <ThinkerCard user={follows} />)
                ) : (
                    <div className="text-center text-white pt-6">
                        <h3 className="text-xl">
                            You do not have any followers
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Followers;

Followers.layout = (page: any) => {
    const { props } = page;
    const user: User = props.user;
    const follow: Boolean = props.follow;
    const followed_by: Boolean = props.followed_by;
    // const { user, auth } = usePage().props as unknown as PageProps;
    // const user = props.user;
    return (
        <AuthLayout title="Followers">
            <ProfileLayout
                follow={follow}
                followed_by={followed_by}
                user={user}
                children={page}
            />
        </AuthLayout>
    );
};
