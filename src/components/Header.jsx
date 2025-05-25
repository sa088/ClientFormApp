import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

const Header = ({ handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: 1,
        padding: "10px 0",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 1, display: { xs: "flex", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome to Administrator
        </Typography>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <IconButton>
            <StarIcon sx={{ color: "#0000008A" }} />
          </IconButton>

          <IconButton sx={{ mr: 0.5 }}>
            <Badge badgeContent={2} color="info">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton>
            <ZoomOutMapIcon sx={{ color: "#0000008A" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <Avatar
            alt="John Doe"
            src="https://i.pravatar.cc/150?img=8"
            sx={{ width: 32, height: 32, mr: 1 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="body2"
              component="div"
              sx={{ fontWeight: "medium" }}
            >
              John Doe
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="caption"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                Admin
              </Typography>
              <ArrowDropDownIcon />
            </Box>
          </Box>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;