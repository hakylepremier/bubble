import React, { ReactNode } from "react";
import ProfileLayout from "./layout/ProfileLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Following = () => {
    return (
        <div>
            <p className="text-white">Following</p>
        </div>
    );
};

export default Following;

Following.layout = (page: ReactNode) => (
    <Authenticated
        // user={usePage().props.auth.user as unknown as PageProps}
        header={
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                My Profile
            </h2>
        }
        title="Following"
    >
        <ProfileLayout children={page} />
    </Authenticated>
);
