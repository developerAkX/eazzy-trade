import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import styled from "@emotion/styled";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  useTheme,
} from "@mui/material";
import Link from "next/link";

const SideBar = (props) => {
  const theme = useTheme();
  const { drawerState, setDrawerState, pages } = props;

  return (
    <>
      <StyledDrawer
        anchor="right"
        open={drawerState}
        variant="temporary"
        onClose={() => setDrawerState(false)}
        onOpen={() => setDrawerState(true)}
        elevation={10}
        BackdropProps={{
          style: {
            background: "transparent",
            backdropFilter: "blur(7px)",
          },
        }}
        PaperProps={{
          style: {
            background: "transparent",
            backdropFilter: "blur(50px)",
            background: "rgb(11, 22, 53, 0.6)",
            color: "rgb(160, 170, 180)",
          },
        }}
      >
        {/* -------------------------------- */}
        <DrawerHeader>
          <CloseButton color="primary" onClick={() => setDrawerState(false)}>
            <ChevronRightRoundedIcon
              style={{ fontSize: 40, color: "rgb(160, 170, 180)" }}
            />
          </CloseButton>
        </DrawerHeader>
        {/* -------------------------------- */}
        <Main>
          <List>
            {pages.map((navLink, index) => (
              <Link
                key={index}
                passHref
                href={`${navLink === "Home" ? "/" : navLink}`}
              >
                <ListItemBtn button key={index}>
                  {navLink}
                </ListItemBtn>
              </Link>
            ))}
          </List>
        </Main>
      </StyledDrawer>
    </>
  );
};

export default SideBar;

// Add styles here ---
const StyledDrawer = styled(Drawer)`
  opacity: 0px;
`;

const DrawerHeader = styled(Box)`
  padding: 1rem 20px 3px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CloseButton = styled(IconButton)`
  width: 3rem;
  height: 3rem;
`;

const Main = styled.div`
  display: grid;
  grid-gap: 1em 1em;
  width: 12rem;
`;
const ListItemBtn = styled(ListItem)`
  padding: 1rem 3rem;
  font-size: 21px;
  font-weight: 700;
`;
