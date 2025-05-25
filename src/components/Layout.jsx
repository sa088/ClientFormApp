import { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ClientForm from "./ClientForm";

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    })
);

const Layout = () => {
    const [open, setOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        if (window.innerWidth < 600) {
            setMobileOpen(!mobileOpen);
        } else {
            setOpen(!open);
        }
    };

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <Sidebar
                open={open}
                mobileOpen={mobileOpen}
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />
            <Main open={open}>
                <Header handleDrawerToggle={handleDrawerToggle} />
                <Box
                    component="div"
                    sx={{
                        p: { xs: 2, md: 3 },
                        backgroundColor: "#f5f5f5",
                        minHeight: "calc(100vh - 64px)",
                    }}
                >
                    <ClientForm />
                </Box>
            </Main>
        </Box>
    );
};

export default Layout;