import { type InertiaLinkProps, Link } from "@inertiajs/react";
import { Box, ListItemButton, Paper, Stack, Typography } from "@mui/material";
import React, { type PropsWithChildren, type ReactNode } from "react";

const NavItem = ({
    icon,
    title,
    active,
    children,
    ...props
}: InertiaLinkProps &
    PropsWithChildren<{
        icon?: ReactNode;
        title: string;
        active: boolean;
    }>) => {
    return (
        <Link {...props}>
            <Paper
                elevation={active ? 1 : 0}
                sx={{
                    borderRadius: "2rem",
                    bgcolor: "transparent",
                    maxWidth: "180px",
                }}
            >
                <ListItemButton
                    sx={{
                        // border: 1,
                        borderRadius: "2rem",
                        ":hover": { bgcolor: "#546492", color: "#e7eef0" },
                        color: active ? "white" : "primary.main",
                        py: "1rem",
                        transitionProperty: "background-color color",
                        transitionDuration: "0.3s",
                        transitionTimingFunction: "ease-in-out",
                        // bgcolor: "transparent",
                        // bgcolor: active ? "primary" : "transparent",
                        bgcolor: active ? "primary.main" : "transparent",
                    }}
                >
                    <Stack direction="row" spacing={2}>
                        {icon && icon}
                        {/* <EmojiObjectsIcon sx={{ mr: "0.5rem" }} /> */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: "inherit",
                                // color: active ? "white" : "black",
                                // ":hover": { color: "inherit" },
                            }}
                        >
                            {title}
                        </Typography>
                    </Stack>
                </ListItemButton>
            </Paper>
        </Link>
    );
};

export default NavItem;
