import Logo from "@/Components/Logo";
import { Head, Link, usePage } from "@inertiajs/react";
import HomeIcon from "@mui/icons-material/Home";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Person2Icon from "@mui/icons-material/Person2";
import {
    Box,
    Button,
    Container,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";
import NavItem from "@/Components/NavItem";
import type { PageProps } from "@/types";
import SecondaryNavItem from "@/Components/SecondaryNavItem";
import Navigation from "@/Components/Navigation";
import SideMenu from "@/Components/SideMenu";

const AuthLayout = ({
    children,
    title,
}: PropsWithChildren<{ header?: ReactNode; title: string }>) => {
    const { auth } = usePage().props as unknown as PageProps;
    const user = auth.user;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Box sx={{ bgcolor: "background.default" }}>
                <Container sx={{}} maxWidth="lg">
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems={"start"}
                        justifyContent={"space-between"}
                    >
                        {/* <Stack
                            direction="column"
                            justifyContent={"space-between"}
                            // bgcolor={"#ff0000"}
                            height={"100dvh"}
                            sx={{ position: "sticky", top: 0 }}
                        >
                            <Box>
                                <Box sx={{ pb: "2rem" }}>
                                    <Logo />
                                </Box>
                                <Stack spacing={"1rem"}>
                                    <NavItem
                                        href={route("home")}
                                        title="home"
                                        icon={<HomeIcon fontSize="small" />}
                                    />
                                    <NavItem
                                        href={route("thoughts.index")}
                                        title="thoughts"
                                        icon={
                                            <EmojiObjectsIcon fontSize="small" />
                                        }
                                    />
                                    <NavItem
                                        href={route("likes.index")}
                                        title="likes"
                                        icon={<FavoriteIcon fontSize="small" />}
                                    />
                                    <NavItem
                                        href={route("profile.show")}
                                        title="profile"
                                        icon={<Person2Icon fontSize="small" />}
                                    />
                                </Stack>
                            </Box>
                            <SecondaryNavItem name={user.name} />
                        </Stack> */}
                        <Navigation />
                        <Box sx={{ flexBasis: "500px" }}>{children}</Box>
                        <SideMenu />
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default AuthLayout;
