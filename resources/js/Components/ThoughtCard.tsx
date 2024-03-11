import type React from "react";
import { type PropsWithChildren, useEffect, useState } from "react";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link, useForm, usePage } from "@inertiajs/react";
import { type PageProps, type Thought, User } from "@/types";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import NavLink from "./NavLink";
import { Box, Paper, Stack, Typography } from "@mui/material";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

dayjs.extend(relativeTime);

export default function ThoughtCard({
    showFollow = true,
    thought,
}: PropsWithChildren<{ thought: Thought; showFollow?: boolean }>) {
    const { auth } = usePage().props as unknown as PageProps;

    const [editing, setEditing] = useState(false);

    const [liked, setLiked] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: thought.message,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        patch(route("thoughts.update", thought.id), {
            onSuccess: () => setEditing(false),
        });
    };

    useEffect(() => {
        // let length = thought.likes.length;
        thought.likes.length === 0 && setLiked(true);
    }, [thought.likes.length]);
    return (
        // border-color: rgb(57 64 86 / var(--tw-border-opacity));
        //     background: #252A37; dark:border-gray-700
        // starts here
        // <div className="p-6 flex space-x-2 text-white dark:border-gray-700">
        //     <svg
        //         xmlns="http://www.w3.org/2000/svg"
        //         className="h-6 w-6 text-[#9BBEC8] -scale-x-100"
        //         fill="none"
        //         viewBox="0 0 24 24"
        //         stroke="currentColor"
        //         strokeWidth="2"
        //     >
        //         <path
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        //         />
        //     </svg>
        //     <div className="">
        //         <div className="flex justify-between items-center">
        //             <div>
        //                 <span className="text-[#9BBEC8]">
        //                     <Link href={route("thinker.show", thought.user.id)}>
        //                         {thought.user.name}
        //                     </Link>
        //                 </span>
        //                 <small className="ml-2 text-sm text-[#427D9D] ">
        //                     {dayjs(thought.created_at).fromNow()}
        //                 </small>
        //                 {thought.created_at !== thought.updated_at && (
        //                     <small className="text-sm  text-[#427D9D]">
        //                         {/* text-gray-500 */} &middot; edited
        //                     </small>
        //                 )}
        //             </div>
        //             {showFollow && (
        //                 <div>
        //                     {thought.user.id === auth.user.id ? (
        //                         <Dropdown>
        //                             <Dropdown.Trigger>
        //                                 <button>
        //                                     <svg
        //                                         xmlns="http://www.w3.org/2000/svg"
        //                                         className="h-4 w-4 text-[#9BBEC8]"
        //                                         viewBox="0 0 20 20"
        //                                         fill="currentColor"
        //                                     >
        //                                         <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        //                                     </svg>
        //                                 </button>
        //                             </Dropdown.Trigger>
        //                             <Dropdown.Content>
        //                                 <button
        //                                     className="block w-full px-4 py-2 text-left text-sm leading-5 text-white dark:hover:bg-gray-800  focus:bg-gray-100 transition duration-150 ease-in-out"
        //                                     onClick={() => setEditing(true)}
        //                                 >
        //                                     Edit
        //                                 </button>
        //                                 <Dropdown.Link
        //                                     as="button"
        //                                     href={route(
        //                                         "thoughts.destroy",
        //                                         thought.id
        //                                     )}
        //                                     method="delete"
        //                                 >
        //                                     Delete
        //                                 </Dropdown.Link>
        //                             </Dropdown.Content>
        //                         </Dropdown>
        //                     ) : (
        //                         <div>
        //                             <Link
        //                                 href={route("profile.following.store")}
        //                                 method="post"
        //                                 data={{
        //                                     followed_user_id: thought.user.id,
        //                                     follower_user_id: auth.user.id,
        //                                 }}
        //                                 as="button"
        //                                 preserveScroll
        //                                 type="button"
        //                             >
        //                                 {thought.user.followers.length === 0 ? (
        //                                     <p className="text-bold">Follow</p>
        //                                 ) : (
        //                                     <p className="text-gray-400  ">
        //                                         Following
        //                                     </p>
        //                                 )}
        //                             </Link>
        //                         </div>
        //                     )}
        //                 </div>
        //             )}
        //         </div>
        //         <Link href={route("thoughts.show", thought.id)}>
        //             {editing ? (
        //                 <form onSubmit={submit}>
        //                     <textarea
        //                         value={data.message}
        //                         onChange={(e) =>
        //                             setData("message", e.target.value)
        //                         }
        //                         className="mt-4 w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 text-white dark:border-gray-700"
        //                     ></textarea>
        //                     <InputError
        //                         message={errors.message}
        //                         className="mt-2"
        //                     />
        //                     <div className="space-x-2">
        //                         <PrimaryButton className="mt-4">
        //                             Save
        //                         </PrimaryButton>
        //                         <button
        //                             className="mt-4"
        //                             onClick={() => {
        //                                 setEditing(false);
        //                                 reset();
        //                                 clearErrors();
        //                             }}
        //                         >
        //                             Cancel
        //                         </button>
        //                     </div>
        //                 </form>
        //             ) : (
        //                 <p className="mt-4 text-lg text-[#DDF2FD]">
        //                     {thought.message}
        //                 </p>
        //             )}
        //         </Link>
        //         {thought.user.id !== auth.user.id && (
        //             <div className="flex gap-2 pt-2">
        //                 <LikeButton thought={thought} />
        //                 <CommentButton />
        //             </div>
        //         )}
        //     </div>
        // </div>
        // ends here

        <div className="w-full pb-4">
            <Paper
                elevation={3}
                sx={{
                    px: "2rem",
                    py: "1.5rem",
                    borderRadius: "3rem",
                    width: "100%",
                    boxShadow: "0px 0px 28px 0px rgba(90, 171, 252, 0.251)",
                    // color: "rgb(55 65 81)",
                    // color: "",
                }}
            >
                <Typography variant="body1" color="initial">
                    {thought.message}
                </Typography>
            </Paper>
            <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"start"}
                spacing={7}
                sx={{ py: "0.7rem" }}
            >
                <Link href={route("thoughts.show", thought.id)}>
                    <Paper
                        elevation={0}
                        sx={{
                            py: "0.25rem",
                            px: "0.5rem",
                            bgcolor: "white",
                            borderRadius: "99%",

                            transitionProperty: "transform box-shadow",
                            ":hover": {
                                // bgcolor: "#e7eef0",
                                // color: "#e7eef0",
                                transform: "scale(1.2)",
                                boxShadow:
                                    "0px 0px 8px 4px rgba(90, 171, 252, 0.3)",
                            },
                            ":active": {
                                transform: "scale(1)",
                                boxShadow: "0 0 0 transparent",
                            },
                            transitionDuration: "0.2s",
                            transitionTimingFunction: "ease-in-out",
                        }}
                    >
                        <ForumRoundedIcon
                            sx={{ color: "#5aabfc", fontSize: "1rem" }}
                        />
                    </Paper>
                </Link>
                <Paper
                    elevation={0}
                    sx={{
                        py: "0.25rem",
                        px: "0.7rem",
                        bgcolor: "#bae8e8",
                        borderRadius: "20rem",
                        flexBasis: "9rem",
                        display: "flex",
                        gap: "0.5rem",
                        // width: "10rem",
                    }}
                >
                    <CalendarMonthIcon
                        sx={{ color: "#5aabfc", fontSize: "1rem" }}
                    />
                    <Typography variant="caption" color="initial">
                        {dayjs(thought.created_at).fromNow()}
                    </Typography>
                </Paper>
                <LikeButton thought={thought} />
            </Stack>
            <Stack
                direction={"row"}
                justifyContent={"end"}
                alignItems={"start"}
                spacing={4}
            >
                <Paper
                    elevation={0}
                    sx={{
                        py: "0.25rem",
                        px: "0.7rem",
                        bgcolor: "#bae8e8",
                        borderRadius: "20rem",
                        flexBasis: "9rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "0.5rem",

                        // width: "10rem",
                    }}
                >
                    <Box sx={{ height: "1.4rem" }}>
                        <Link href={route("thinker.show", thought.user.id)}>
                            <Typography variant="caption" color="initial">
                                {thought.user.name}
                            </Typography>
                        </Link>
                    </Box>
                </Paper>
                <Paper
                    elevation={1}
                    sx={{
                        // py: "0.25rem",
                        // px: "0.7rem",
                        bgcolor: "#bae8e8",
                        borderRadius: "20rem",
                        flexBasis: "3.5rem",
                        height: "3.5rem",
                        // width: "10rem",
                    }}
                >
                    <AccountCircleIcon
                        sx={{ color: "primary", fontSize: "3.5rem" }}
                    />
                </Paper>
            </Stack>
        </div>
    );
}
