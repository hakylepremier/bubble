import { AccountCircle, Search } from "@mui/icons-material";
import { Box, Stack, TextField } from "@mui/material";
import React from "react";
import SearchBox from "./SearchBox";

const SideMenu = () => {
    return (
        <Stack
            direction={"column"}
            alignItems={"flex-start"}
            spacing={"1rem"}
            sx={{
                flexBasis: "30rem",
                // flex: 1,
            }}
        >
            <SearchBox />
            <div>yes</div>
        </Stack>
    );
};

export default SideMenu;
