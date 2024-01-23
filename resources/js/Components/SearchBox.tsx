import { Search } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import React from "react";

const SearchBox = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-end",
                // flexBasis: "30rem",
                // flex: 1,
            }}
        >
            <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
                id="input-with-sx"
                label="Search"
                variant="standard"
                sx={{ flex: 1 }}
            />
        </Box>
    );
};

export default SearchBox;
