import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SideBar from "./SideBar";
import { Button } from "@mui/material";
import Link from "next/link";

const pages = ["Home", "Service", "Course"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBarStyled position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Eazzy
            <span> Trade</span>
          </Logo>

          <Logo
            variant="h6"
            noWrap
            component="div"
            style={{ fontSize: "1.5rem" }}
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Eazzy <span>Trade</span>
          </Logo>
          <Box
            sx={{
              flexGrow: 0,
              marginLeft: "auto",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page, index) => (
              <Link
                key={index}
                passHref
                href={`${page === "Home" ? "/" : page}`}
              >
                <MenuButton
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1, mx: 1, color: "white", display: "block" }}
                >
                  {page}
                </MenuButton>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="larger"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <SideBar
            drawerState={anchorElNav}
            setDrawerState={setAnchorElNav}
            pages={pages}
          />
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
}

const AppBarStyled = styled(AppBar)`
  background: transparent;
  box-shadow: none;
  backdrop-filter: blur(50px);
  /* border-style: solid;
  border-color: rgba(194, 224, 255, 0.08);
  border-width: 0px 0px thin; */
  background: rgb(11, 22, 53, 0.7);
  color: rgb(160, 170, 180);
  /* display: none; */
`;
const Logo = styled(Typography)`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.8rem;
  color: #0070f3;
  span {
    color: #fff;
  }
`;
const MenuButton = styled(Button)`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1rem;
  color: rgb(160, 170, 180);
`;
