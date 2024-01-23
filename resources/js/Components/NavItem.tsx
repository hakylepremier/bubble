import { InertiaLinkProps, Link } from "@inertiajs/react";
import { Box, ListItemButton, Stack, Typography } from "@mui/material";
import React, { PropsWithChildren, ReactNode } from "react";

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
            <ListItemButton
                sx={{
                    border: 1,
                    borderRadius: "2rem",
                    ":hover": { bgcolor: "GrayText" },
                    // bgcolor: active ? "primary" : "transparent",
                    bgcolor: active ? "primary.main" : "transparent",
                }}
            >
                <Stack direction="row" spacing={2}>
                    {icon && <>{icon}</>}
                    {/* <EmojiObjectsIcon sx={{ mr: "0.5rem" }} /> */}
                    <Typography variant="body1" color="initial">
                        {title}
                    </Typography>
                </Stack>
            </ListItemButton>
        </Link>
    );
};

export default NavItem;
