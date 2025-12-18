import { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  Badge,
  Collapse,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../store/slices/authSlice";
import { openModal } from "../store/slices/modalSlice";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/Kamalatrustlogo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutAnchor, setAboutAnchor] = useState<null | HTMLElement>(null);

  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(
    null
  );
  const aboutMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleAboutMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    // Clear any pending timeout
    if (aboutMenuTimeoutRef.current) {
      clearTimeout(aboutMenuTimeoutRef.current);
      aboutMenuTimeoutRef.current = null;
    }
    event.preventDefault();
    event.stopPropagation();
    setAboutAnchor(event.currentTarget);
  };

  const handleAboutMenuClose = () => {
    // Add delay to allow moving to menu
    if (aboutMenuTimeoutRef.current) {
      clearTimeout(aboutMenuTimeoutRef.current);
    }
    aboutMenuTimeoutRef.current = setTimeout(() => {
      setAboutAnchor(null);
      aboutMenuTimeoutRef.current = null;
    }, 200);
  };

  const handleAboutMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (aboutAnchor) {
      setAboutAnchor(null);
    } else {
      setAboutAnchor(event.currentTarget);
    }
  };

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleLogout = () => {
    handleUserMenuClose();
    dispatch(
      openModal({
        title: "Logout Confirmation",
        message:
          "Are you sure you want to logout? You will need to login again to access your account.",
        confirmText: "Logout",
        cancelText: "Cancel",
        onConfirm: () => {
          dispatch(logout());
          navigate("/login");
        },
        onCancel: () => {
          // Modal will close automatically
        },
      })
    );
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { label: "Home", path: "/home" },
    { label: "Shop", path: "/shop" },
    // { label: "All Artworks", path: "/all-artworks" },
    // { label: "Categories", path: "/categories" },
    { label: "Artists", path: "/artists" },
    // { label: "Meet Our Artists", path: "/meet-our-artists" },
    // { label: "Stories of Craft", path: "/stories-of-craft" },
    { label: "Contact", path: "/contact" },
  ];

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src={logo}
        alt="Kamala Trust Logo"
        sx={{
          height: 50,
          margin: "16px auto",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/home");
          setMobileOpen(false);
        }}
      />
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
              selected={location.pathname === item.path}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "rgba(199, 123, 48, 0.1)",
                  color: "#C77B30",
                },
                "&:hover": {
                  backgroundColor: "rgba(199, 123, 48, 0.08)",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* About Us with Expandable Children */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(199, 123, 48, 0.08)",
              },
            }}
          >
            <ListItemText primary="About Us" />
            <ArrowDropDownIcon
              sx={{
                transform: mobileAboutOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* About Us Children */}
        <Collapse in={mobileAboutOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                navigate("/about-vanvaas");
                setMobileOpen(false);
              }}
            >
              <ListItemText
                primary="About Vanvaas"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                navigate("/about-kamala-trust");
                setMobileOpen(false);
              }}
            >
              <ListItemText
                primary="About Kamala Trust"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#F5EFE3",
          color: "#1B1B1B",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, sm: 3 } }}>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Kamala Trust Logo"
            sx={{
              height: { xs: 45, sm: 55, md: 60 },
              cursor: "pointer",
              mr: 2,
            }}
            onClick={() => navigate("/home")}
          />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexGrow: 1,
              }}
            >
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color:
                      location.pathname === item.path ? "#C77B30" : "#1B1B1B",
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    "&:hover": {
                      backgroundColor: "rgba(199, 123, 48, 0.1)",
                      color: "#C77B30",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              {/* About Us Menu */}
              <Box
                onMouseEnter={handleAboutMenuOpen}
                onMouseLeave={handleAboutMenuClose}
                sx={{ position: "relative" }}
              >
                <Button
                  onClick={handleAboutMenuToggle}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    color: aboutAnchor ? "#C77B30" : "#1B1B1B",
                    fontWeight: aboutAnchor ? 600 : 400,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    "&:hover": {
                      backgroundColor: "rgba(199, 123, 48, 0.1)",
                      color: "#C77B30",
                    },
                  }}
                >
                  About Us
                </Button>
                <Menu
                  anchorEl={aboutAnchor}
                  open={Boolean(aboutAnchor)}
                  onClose={handleAboutMenuClose}
                  disableAutoFocus
                  disableEnforceFocus
                  disableRestoreFocus
                  MenuListProps={{
                    onMouseEnter: (e: React.MouseEvent<HTMLUListElement>) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (aboutMenuTimeoutRef.current) {
                        clearTimeout(aboutMenuTimeoutRef.current);
                        aboutMenuTimeoutRef.current = null;
                      }
                    },
                    onMouseLeave: handleAboutMenuClose,
                    onMouseDown: (e: React.MouseEvent<HTMLUListElement>) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  PaperProps={{
                    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    sx: {
                      mt: 1,
                      minWidth: 220,
                      borderRadius: "12px",
                      boxShadow:
                        "0 8px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(199, 123, 48, 0.2)",
                      background:
                        "linear-gradient(135deg, #FFFFFF 0%, #F9F7F4 100%)",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background:
                          "linear-gradient(90deg, #C77B30 0%, #A56324 100%)",
                      },
                    },
                  }}
                >
                  <MenuItem
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (aboutMenuTimeoutRef.current) {
                        clearTimeout(aboutMenuTimeoutRef.current);
                        aboutMenuTimeoutRef.current = null;
                      }
                      setAboutAnchor(null);
                      navigate("/about-vanvaas");
                    }}
                    sx={{
                      py: 1.5,
                      px: 2.5,
                      fontSize: "0.95rem",
                      color: "#1B1B1B",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(199, 123, 48, 0.15)",
                        color: "#C77B30",
                        transform: "translateX(4px)",
                      },
                      "&:first-of-type": {
                        mt: 0.5,
                      },
                    }}
                  >
                    About Vanvaas
                  </MenuItem>
                  <MenuItem
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (aboutMenuTimeoutRef.current) {
                        clearTimeout(aboutMenuTimeoutRef.current);
                        aboutMenuTimeoutRef.current = null;
                      }
                      setAboutAnchor(null);
                      navigate("/about-kamala-trust");
                    }}
                    sx={{
                      py: 1.5,
                      px: 2.5,
                      fontSize: "0.95rem",
                      color: "#1B1B1B",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(199, 123, 48, 0.15)",
                        color: "#C77B30",
                        transform: "translateX(4px)",
                      },
                      "&:last-of-type": {
                        mb: 0.5,
                      },
                    }}
                  >
                    About Kamala Trust
                  </MenuItem>
                </Menu>
              </Box>

              {/* Impact Menu */}
              {/* <Box
                onMouseEnter={handleImpactMenuOpen}
                onMouseLeave={handleImpactMenuClose}
                sx={{ position: "relative" }}
              >
                <Button
                  onClick={handleImpactMenuToggle}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    color: impactAnchor ? "#C77B30" : "#1B1B1B",
                    fontWeight: impactAnchor ? 600 : 400,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    "&:hover": {
                      backgroundColor: "rgba(199, 123, 48, 0.1)",
                      color: "#C77B30",
                    },
                  }}
                >
                  Impact
                </Button>
                <Menu
                  anchorEl={impactAnchor}
                  open={Boolean(impactAnchor)}
                  onClose={handleImpactMenuClose}
                  disableAutoFocus
                  disableEnforceFocus
                  disableRestoreFocus
                  MenuListProps={{
                    onMouseEnter: (e: React.MouseEvent<HTMLUListElement>) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (impactMenuTimeoutRef.current) {
                        clearTimeout(impactMenuTimeoutRef.current);
                        impactMenuTimeoutRef.current = null;
                      }
                    },
                    onMouseLeave: handleImpactMenuClose,
                    onMouseDown: (e: React.MouseEvent<HTMLUListElement>) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  PaperProps={{
                    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    sx: {
                      mt: 1,
                      minWidth: 240,
                      borderRadius: "12px",
                      boxShadow:
                        "0 8px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(199, 123, 48, 0.2)",
                      background:
                        "linear-gradient(135deg, #FFFFFF 0%, #F9F7F4 100%)",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background:
                          "linear-gradient(90deg, #C77B30 0%, #A56324 100%)",
                      },
                    },
                  }}
                >
                  <MenuItem
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (impactMenuTimeoutRef.current) {
                        clearTimeout(impactMenuTimeoutRef.current);
                        impactMenuTimeoutRef.current = null;
                      }
                      setImpactAnchor(null);
                      navigate("/how-your-purchase-helps");
                    }}
                    sx={{
                      py: 1.5,
                      px: 2.5,
                      fontSize: "0.95rem",
                      color: "#1B1B1B",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(199, 123, 48, 0.15)",
                        color: "#C77B30",
                        transform: "translateX(4px)",
                      },
                      "&:first-of-type": {
                        mt: 0.5,
                      },
                    }}
                  >
                    How Your Purchase Helps
                  </MenuItem>
                  <MenuItem
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (impactMenuTimeoutRef.current) {
                        clearTimeout(impactMenuTimeoutRef.current);
                        impactMenuTimeoutRef.current = null;
                      }
                      setImpactAnchor(null);
                      navigate("/artisan-empowerment");
                    }}
                    sx={{
                      py: 1.5,
                      px: 2.5,
                      fontSize: "0.95rem",
                      color: "#1B1B1B",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(199, 123, 48, 0.15)",
                        color: "#C77B30",
                        transform: "translateX(4px)",
                      },
                      "&:last-of-type": {
                        mb: 0.5,
                      },
                    }}
                  >
                    Artisan Empowerment
                  </MenuItem>
                </Menu>
              </Box> */}
            </Box>
          )}

          {/* Right side icons - Cart and User Avatar */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Cart Icon */}
            <IconButton
              color="inherit"
              onClick={() => navigate("/cart")}
              sx={{
                color: location.pathname === "/cart" ? "#C77B30" : "#1B1B1B",
                "&:hover": {
                  backgroundColor: "rgba(199, 123, 48, 0.1)",
                  color: "#C77B30",
                },
              }}
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {/* User Avatar */}
            {isAuthenticated ? (
              <Box
                onMouseEnter={handleUserMenuOpen}
                onMouseLeave={handleUserMenuClose}
                sx={{ position: "relative" }}
              >
                <IconButton
                  onClick={handleUserMenuOpen}
                  sx={{
                    p: 0,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Avatar
                    src={user?.picture}
                    alt={user?.name || "User"}
                    sx={{
                      width: { xs: 36, sm: 40 },
                      height: { xs: 36, sm: 40 },
                      cursor: "pointer",
                      border: "2px solid #C77B30",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "#A56324",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    {user?.name?.charAt(0) || <AccountCircleIcon />}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={userMenuAnchor}
                  open={Boolean(userMenuAnchor)}
                  onClose={handleUserMenuClose}
                  MenuListProps={{
                    onMouseLeave: handleUserMenuClose,
                    "aria-labelledby": "user-menu-button",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  PaperProps={{
                    sx: {
                      mt: 1.5,
                      minWidth: 180,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      borderRadius: "8px",
                    },
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      navigate("/my-account");
                      handleUserMenuClose();
                    }}
                    sx={{
                      py: 1.5,
                      px: 2,
                      "&:hover": {
                        backgroundColor: "rgba(199, 123, 48, 0.1)",
                      },
                    }}
                  >
                    My Account
                  </MenuItem>
                  <MenuItem
                    onClick={handleLogout}
                    sx={{
                      py: 1.5,
                      px: 2,
                      color: "#d32f2f",
                      "&:hover": {
                        backgroundColor: "rgba(211, 47, 47, 0.1)",
                      },
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                sx={{
                  color: "#1B1B1B",
                  textTransform: "none",
                  fontSize: "0.95rem",
                  "&:hover": {
                    backgroundColor: "rgba(199, 123, 48, 0.1)",
                    color: "#C77B30",
                  },
                }}
              >
                Login
              </Button>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
