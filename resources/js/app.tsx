import "./bootstrap";
import "../css/app.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

// export const themeOptions: ThemeOptions = {
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#272643",
        },
        secondary: {
            main: "#BAE8E8",
        },
        background: {
            default: "#F4F9FF",
            // default: "red",
        },
        text: {
            primary: "#272643",
            secondary: "rgb(82, 81, 104)",
        },
    },
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob(["./Pages/**/*.tsx", "../images/**"])
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider theme={theme}>
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
