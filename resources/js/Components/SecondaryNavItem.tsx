import { Link } from "@inertiajs/react";
import { MoreVert } from "@mui/icons-material";
import {
    Box,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material";
import React, { PropsWithChildren, ReactNode } from "react";

const SecondaryNavItem = ({
    children,
    name,
}: PropsWithChildren<{ header?: ReactNode; name: string }>) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontSize: "0.8rem" }}
                >
                    {name}
                </Typography>
                <Menu
                    id="secondary-menu"
                    aria-labelledby="secondary-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <Link href={route("settings.edit")}>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                    </Link>
                    <Link href={route("logout")} method="post" as="button">
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Link>
                </Menu>
                <IconButton
                    aria-label="menu"
                    id="secondary-button"
                    aria-controls={open ? "secondary-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <MoreVert />
                </IconButton>
            </Stack>
        </Box>
    );
};

export default SecondaryNavItem;
