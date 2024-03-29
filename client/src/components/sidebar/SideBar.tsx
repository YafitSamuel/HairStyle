import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./sidebar.css";
import Logo from "../home/Logo";
import MiniLogo from "./Mini Logo";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { FaWaze } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  backgroundColor: "rgb(184, 61, 81)",
}));

export default function SideBae() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "rgb(184, 61, 81)" }}>
      <MiniLogo />

      <Typography
        variant="h6"
        noWrap
        sx={{ flexGrow: 1 }}
        component="div"
      ></Typography>

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader className="colorText">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <MiniLogo />
        </DrawerHeader>

        <nav className="nav">
          <Link to="/">
            הרשמה והתחברות <LockOutlinedIcon className="Icon" />
          </Link>

          <Link to="/appointments">
            קביעת תור <FaRegCalendarPlus className="Icon" />
          </Link>

          <Link to="/Appointment">
            התורים שלי <FaRegCalendarCheck className="Icon" />
          </Link>

          <a href="https://wa.me/+9720548170556/?text=urlencodedtext">
            WhatsApp <WhatsAppIcon className="Icon" />
          </a>

          <a href="https://instagram.com/rivka_adela_hair?igshid=YmMyMTA2M2Y=">
            Instagram <InstagramIcon className="Icon" />
          </a>

          <a href="https://instagram.com/rivka_adela_hair?igshid=YmMyMTA2M2Y=">
            ניווט לבית העסק
            <FaWaze className="Icon" />
          </a>
          <Link to="/admin">
            יומן מנהל
            <FaRegCalendarPlus className="Icon" />
          </Link>
        </nav>
      </Drawer>
    </Box>
  );
}
