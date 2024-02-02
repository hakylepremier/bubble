import React, { PropsWithChildren, ReactNode } from "react";
import ProfileLayout from "./layout/ProfileLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import ThinkerCard from "./Partials/ThinkerCard";
import AuthLayout from "@/Layouts/AuthLayout";

const Following = ({ following }: PropsWithChildren<{ following: User[] }>) => {
    return (
        <div>
            <div className="flex flex-col gap-4 pt-3">
                {following.length !== 0 ? (
                    following.map((follows) => <ThinkerCard user={follows} />)
                ) : (
                    <div className=" text-center pt-6 text-white">
                        <h3 className="text-xl">
                            You are not following anyone at the moment.
                        </h3>
                        <p>
                            Follow people to be get their thoughts appearing on
                            your home page.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Following;

Following.layout = (page: any) => {
    const { props } = page;
    const user: User = props.user;
    const follow: Boolean = props.follow;
    const followed_by: Boolean = props.followed_by;
    return (
        <AuthLayout title="Following">
            <ProfileLayout
                follow={follow}
                followed_by={followed_by}
                user={user}
                children={page}
            />
        </AuthLayout>
    );
};
