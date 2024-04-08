import { Box, Stack } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import HomeIcon from "@mui/icons-material/Home";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Person2Icon from "@mui/icons-material/Person2";
import SecondaryNavItem from "./SecondaryNavItem";
import { usePage } from "@inertiajs/react";
import type { PageProps } from "@/types";

const Navigation = () => {
    const { auth } = usePage().props as unknown as PageProps;
    const user = auth.user;
    return (
        <Stack
            direction="column"
            justifyContent={"space-between"}
            // bgcolor={"#ff0000"}
            height={"100dvh"}
            sx={{ position: "sticky", top: 0, py: "1rem" }}
        >
            <Box>
                <Box sx={{ pb: "2rem" }}>
                    <Logo />
                </Box>
                <Stack spacing={"1rem"}>
                    <NavItem
                        href={route("home")}
                        active={route().current("home")}
                        title="home"
                        icon={
                            <HomeIcon
                                fontSize="small"
                                sx={{
                                    color: "inherit",
                                }}
                            />
                        }
                    />
                    <NavItem
                        href={route("thoughts.index")}
                        active={route().current("thoughts.index")}
                        title="thoughts"
                        icon={
                            <EmojiObjectsIcon
                                fontSize="small"
                                sx={{
                                    color: "inherit",
                                }}
                            />
                        }
                    />
                    <NavItem
                        href={route("likes.index")}
                        active={route().current("likes.index")}
                        title="likes"
                        icon={
                            <FavoriteIcon
                                fontSize="small"
                                sx={{
                                    color: "inherit",
                                }}
                            />
                        }
                    />
                    <NavItem
                        href={route("profile.show")}
                        active={route().current("profile.show")}
                        title="profile"
                        icon={
                            <Person2Icon
                                fontSize="small"
                                sx={{
                                    // color: route().current("profile.show")
                                    //     ? "white"
                                    //     : "black",
                                    color: "inherit",
                                }}
                            />
                        }
                    />
                </Stack>
            </Box>
            <SecondaryNavItem name={user.name} />
        </Stack>
    );
};

export default Navigation;
