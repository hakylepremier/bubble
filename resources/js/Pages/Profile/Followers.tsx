import React, { ReactNode } from "react";
import ProfileLayout from "./layout/ProfileLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Followers = () => {
    return (
        <div>
            <p className="text-white">Followers</p>
        </div>
    );
};

export default Followers;

Followers.layout = (page: ReactNode) => (
    <Authenticated
        // user={usePage().props.auth.user as unknown as PageProps}
        header={
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                My Profile
            </h2>
        }
        title="Followers"
    >
        <ProfileLayout children={page} />
    </Authenticated>
);
