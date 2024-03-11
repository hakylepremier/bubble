import type { PageProps, Thought } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import React, { type PropsWithChildren, useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Paper, Typography } from "@mui/material";

const LikeButton = ({ thought }: PropsWithChildren<{ thought: Thought }>) => {
    const { auth } = usePage().props as unknown as PageProps;
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        // let length = thought.likes.length;
        thought.likes.length === 0 && setLiked(true);
    }, [thought.likes.length]);
    return (
        <div className="text-blue-800">
            {thought.likes[0] ? (
                <Link
                    as="button"
                    href={route("likes.destroy", thought.likes[0].id)}
                    method="delete"
                    onSuccess={() => setLiked(true)}
                    preserveScroll
                    type="button"
                    // className={
                    //     "px-4 py-2 text-start text-sm leading-5  text-gray-300 dark:text-gray-800  hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none  transition duration-150 ease-in-out "
                    // }
                >
                    <Paper
                        elevation={0}
                        sx={{
                            py: "0.25rem",
                            px: "0.5rem",
                            bgcolor: "white",
                            borderRadius: "10rem",
                            display: "flex",
                            gap: "0.5rem",
                            alignItems: "center",
                            color: "red",
                            ":hover": {
                                color: "blue",
                                boxShadow:
                                    "0px 0px 8px 4px rgba(90, 171, 252, 0.3)",
                            },
                        }}
                    >
                        <FavoriteIcon
                            sx={{ color: "inherit", fontSize: "1rem" }}
                        />
                        <Typography
                            variant="body1"
                            sx={{ fontSize: "10px", color: "black" }}
                        >
                            {thought.likes_count ? thought.likes_count : 0}
                        </Typography>
                    </Paper>
                </Link>
            ) : (
                <Link
                    as="button"
                    href={route("likes.store")}
                    method="post"
                    data={{
                        thought_id: thought.id,
                        user_id: auth.user.id,
                    }}
                    onSuccess={() => setLiked(true)}
                    preserveScroll
                    type="button"
                    // className={
                    //     "px-4 py-2 text-start text-sm leading-5 dark:text-transparent text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none transition duration-150 ease-in-out "
                    // }
                >
                    <Paper
                        elevation={0}
                        sx={{
                            py: "0.25rem",
                            px: "0.5rem",
                            bgcolor: "white",
                            borderRadius: "10rem",
                            display: "flex",
                            gap: "0.5rem",
                            alignItems: "center",
                            color: "red",
                            ":hover": {
                                color: "blue",
                                boxShadow:
                                    "0px 0px 8px 4px rgba(90, 171, 252, 0.3)",
                            },
                        }}
                    >
                        <FavoriteBorderOutlinedIcon
                            sx={{
                                color: "inherit",
                                fontSize: "1rem",
                            }}
                        />
                        <Typography
                            variant="body1"
                            sx={{ fontSize: "10px", color: "black" }}
                        >
                            {thought.likes_count ? thought.likes_count : 0}
                        </Typography>
                    </Paper>
                </Link>
            )}
        </div>
    );
};

export default LikeButton;
