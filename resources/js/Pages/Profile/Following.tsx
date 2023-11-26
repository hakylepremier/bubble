import React, { PropsWithChildren, ReactNode } from "react";
import ProfileLayout from "./layout/ProfileLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import ThinkerCard from "./Partials/ThinkerCard";

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
            title="Following"
        >
            <ProfileLayout user={user} children={page} />
        </Authenticated>
    );
};
