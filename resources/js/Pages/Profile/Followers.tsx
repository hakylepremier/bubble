import React, { PropsWithChildren, ReactNode } from "react";
import ProfileLayout from "./layout/ProfileLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import ThinkerCard from "./Partials/ThinkerCard";

const Followers = ({ followers }: PropsWithChildren<{ followers: User[] }>) => {
    return (
        <div>
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
    // const { user, auth } = usePage().props as unknown as PageProps;
    // const user = props.user;
    return (
        <Authenticated
            // user={usePage().props.auth.user as unknown as PageProps}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Profile
                </h2>
            }
            title="Followers"
        >
            <ProfileLayout user={user} children={page} />
        </Authenticated>
    );
};
