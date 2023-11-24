import React, { PropsWithChildren, ReactNode } from "react";
import { PageProps, Thought } from "@/types";
import ThoughtComponent from "@/Components/ThoughtCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import dayjs from "dayjs";
import { Link, useForm, usePage } from "@inertiajs/react";
import ProfileLogo from "./Partials/ProfileLogo";
import NavLink from "@/Components/NavLink";
import ProfileLayout from "./layout/ProfileLayout";

const Index = ({ auth }: PageProps) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });
    return (
        <div className=" text-center text-white pt-6">
            <h3 className="text-xl">You have not added any shower thoughts.</h3>
            <p>Let people here what you have to say</p>
        </div>
    );
};

export default Index;

// Index.layout = (page: ReactNode) => <ProfileLayout children={page} />;

Index.layout = (page: ReactNode) => (
    <Authenticated
        // user={usePage().props.auth.user as unknown as PageProps}
        header={
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                My Profile
            </h2>
        }
        title="Profile"
    >
        <ProfileLayout children={page} />
    </Authenticated>
);
