import React from "react";
import LOGO from "../../images/LOGO.svg";
import "@fontsource/righteous";
import { Box, Stack, Typography } from "@mui/material";

const Logo = () => {
    return (
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box sx={{ width: "2.5rem", height: "2.5rem" }}>
                <img src={LOGO} alt="Logo" className="h-full w-full" />
            </Box>
            <Typography
                variant="h2"
                color="initial"
                fontFamily={"Righteous"}
                // fontSize={4}
                sx={{ fontSize: "2.25rem", color: "#272643" }}
            >
                bubble
            </Typography>
        </Stack>
    );
};

export default Logo;
