import { Link } from "@inertiajs/react";
import React, { PropsWithChildren, useState } from "react";

// HACK: Design Not properly working but functionality works fine
const FollowButton = ({
    authId,
    userId,
    followText = "Following",
    unfollowText = "Unfollow",
    alreadyFollowing = true,
    colorGreen = false,
}: PropsWithChildren<{
    authId: number;
    userId: number;
    followText?: string;
    unfollowText?: string;
    alreadyFollowing?: Boolean;
    colorGreen?: Boolean;
}>) => {
    const [follow, setFollow] = useState(followText);
    return (
        <Link
            href={route("profile.following.store")}
            method="post"
            data={{
                followed_user_id: userId,
                follower_user_id: authId,
            }}
            as="button"
            preserveScroll
            type="button"
            onMouseOver={() => setFollow(unfollowText)}
            onMouseOut={() => setFollow(followText)}
        >
            {!colorGreen ? (
                <div
                    className={`hover:border-red-400 hover:text-red-400 text-white border-white border-2 border-solid rounded-3xl px-12 relative cursor-pointer`}
                >
                    <p className="text-inherit ">{follow}</p>
                </div>
            ) : (
                <div
                    className={`hover:border-green-300 hover:text-green-300 text-white border-white border-2 border-solid rounded-3xl px-12 relative cursor-pointer`}
                >
                    <p className="text-inherit ">{follow}</p>
                </div>
            )}
        </Link>
    );
};

export default FollowButton;
