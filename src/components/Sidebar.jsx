import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ArticleIcon from "@mui/icons-material/Article";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import StarIcon from "@mui/icons-material/Star";

const menuItems = [
  {
    id: "dashboard",
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    id: "product-list",
    text: "Product List",
    icon: <FormatListBulletedIcon />,
    path: "/product-list",
  },
  {
    id: "file",
    text: "File",
    icon: <FolderIcon />,
    path: "/file",
    hasSubmenu: true,
    submenu: [],
  },
  {
    id: "settings",
    text: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
    hasSubmenu: true,
    submenu: [
      {
        id: "salary",
        text: "Salary",
        icon: <AccountBalanceWalletIcon />,
        path: "/settings/salary",
      },
      {
        id: "salary-international",
        text: "Salary International",
        icon: <PaymentIcon />,
        path: "/settings/salary-international",
      },
      {
        id: "tax-deduction",
        text: "Tax Deduction",
        icon: <ReceiptIcon />,
        path: "/settings/tax-deduction",
      },
      {
        id: "articles",
        text: "Articles",
        icon: <ArticleIcon />,
        path: "/settings/articles",
      },
      {
        id: "articles-wholesale",
        text: "Articles Wholesale",
        icon: <StorefrontIcon />,
        path: "/settings/articles-wholesale",
      },
      {
        id: "product-master",
        text: "Product Master",
        icon: <InventoryIcon />,
        path: "/settings/product-master",
      },
      {
        id: "product-sale-price",
        text: "Product Sale Price",
        icon: <LocalOfferIcon />,
        path: "/settings/product-sale-price",
      },
      {
        id: "rom",
        text: "ROM",
        icon: <InventoryIcon />,
        path: "/settings/rom",
      },
      {
        id: "sm-product-price",
        text: "SM Product Price To",
        icon: <LocalOfferIcon />,
        path: "/settings/sm-product-price",
      },
      {
        id: "quotation-followup",
        text: "Quotation Followup",
        icon: <QuestionAnswerIcon />,
        path: "/settings/quotation-followup",
      },
    ],
  },
];

const SidebarContent = ({
  handleActiveItem,
  openSubMenus,
  handleSubMenuToggle,
  activeItem,
}) => {
  return (
    <>
      <Box
        sx={{
          p: "10px",
          backgroundColor: "#262F37",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "text.sidebarActive", fontWeight: "bold" }}
        >
          LOGO
        </Typography>
      </Box>

      <Box sx={{ py: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#FFFFFF17",
            borderRadius: 1,
            p: "6px",
          }}
        >
          <SearchIcon sx={{ color: "text.sidebar", mx: 1 }} />
          <InputBase
            placeholder="Search..."
            sx={{
              color: "text.sidebar",
              "& .MuiInputBase-input": {
                width: "100%",
                fontSize: "16px",
              },
              flexGrow: 1,
            }}
          />
        </Box>
      </Box>

      <List component="nav" sx={{ p: 0 }}>
        {menuItems.map((item) => (
          <Box key={item.id}>
            <ListItem disablePadding>
              <ListItemButton
                selected={activeItem === item.id}
                onClick={() => {
                  handleActiveItem(item.id);
                  if (item.hasSubmenu) {
                    handleSubMenuToggle(item.id);
                  }
                }}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&.Mui-selected": {
                    bgcolor: "primary.main",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                      color: "text.sidebarActive",
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      activeItem === item.id
                        ? "text.sidebarActive"
                        : "text.sidebar",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "0.875rem",
                    color:
                      activeItem === item.id
                        ? "text.sidebarActive"
                        : "text.sidebar",
                  }}
                />
                {item.hasSubmenu &&
                  (openSubMenus.includes(item.id) ? (
                    <ExpandLess
                      sx={{
                        color:
                          activeItem === item.id
                            ? "text.sidebarActive"
                            : "text.sidebar",
                      }}
                    />
                  ) : (
                    <ExpandMore
                      sx={{
                        color:
                          activeItem === item.id
                            ? "text.sidebarActive"
                            : "text.sidebar",
                      }}
                    />
                  ))}
              </ListItemButton>
            </ListItem>

            {item.hasSubmenu && (
              <Collapse
                in={openSubMenus.includes(item.id)}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding sx={{ pl: 2 }}>
                  {item.submenu.map((subItem) => (
                    <ListItem key={subItem.id} disablePadding>
                      <ListItemButton
                        selected={activeItem === subItem.id}
                        onClick={() => handleActiveItem(subItem.id)}
                        sx={{
                          borderRadius: 1,
                          py: 0.5,
                          "&.Mui-selected": {
                            bgcolor: "primary.main",
                            "&:hover": {
                              bgcolor: "primary.dark",
                            },
                            "& .MuiListItemIcon-root, & .MuiListItemText-primary":
                              {
                                color: "text.sidebarActive",
                              },
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color:
                              activeItem === subItem.id
                                ? "text.sidebarActive"
                                : "text.sidebar",
                            minWidth: 36,
                          }}
                        >
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.text}
                          primaryTypographyProps={{
                            fontSize: "0.8125rem",
                            color:
                              activeItem === subItem.id
                                ? "text.sidebarActive"
                                : "text.sidebar",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>

      <Box sx={{ mt: "auto", pt: 2 }}>
        <ListItem sx={{ py: 1 }}>
          <ListItemIcon sx={{ color: "text.sidebar", minWidth: 40 }}>
            <StarIcon />
          </ListItemIcon>
          <ListItemText
            primary="Taux Du Jour"
            primaryTypographyProps={{
              fontSize: "0.875rem",
              color: "text.sidebar",
              fontWeight: "medium",
            }}
          />
        </ListItem>
      </Box>
    </>
  );
};

const Sidebar = ({ open, mobileOpen, drawerWidth, handleDrawerToggle }) => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [openSubMenus, setOpenSubMenus] = useState(["settings"]);

  const handleActiveItem = (itemId) => {
    setActiveItem(itemId);
  };

  const handleSubMenuToggle = (itemId) => {
    setOpenSubMenus((prevOpenSubMenus) => {
      if (prevOpenSubMenus.includes(itemId)) {
        return prevOpenSubMenus.filter((id) => id !== itemId);
      } else {
        return [...prevOpenSubMenus, itemId];
      }
    });
  };

  return (
    <>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "background.sidebar",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <SidebarContent
          handleActiveItem={handleActiveItem}
          openSubMenus={openSubMenus}
          handleSubMenuToggle={handleSubMenuToggle}
          activeItem={activeItem}
        />
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "background.sidebar",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <SidebarContent
          handleActiveItem={handleActiveItem}
          openSubMenus={openSubMenus}
          handleSubMenuToggle={handleSubMenuToggle}
          activeItem={activeItem}
        />
      </Drawer>
    </>
  );
};

export default Sidebar;