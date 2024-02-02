import React, { PropsWithChildren } from "react";
import ProfileLogo from "./ProfileLogo";
import FollowButton from "./FollowButton";
import { PageProps, User } from "@/types";
import { Link, usePage } from "@inertiajs/react";

const ThinkerCard = ({ user }: PropsWithChildren<{ user: User }>) => {
    const { auth } = usePage().props as unknown as PageProps;
    return (
        <div className="flex justify-between items-center max-w-2xl">
            <div className="flex gap-2 items-center">
                <div className="h-12 w-12 p-3 bg-gray-700 rounded-full ">
                    <ProfileLogo />
                </div>
                <Link href={route("thinker.show", user.id)}>
                    <p className="text-white ">{user.name}</p>
                </Link>
            </div>
            <FollowButton authId={auth.user.id} userId={user.id} />
        </div>
    );
};

export default ThinkerCard;
