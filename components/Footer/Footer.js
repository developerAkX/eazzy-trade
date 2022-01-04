import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CopyrightIcon from "@mui/icons-material/Copyright";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const leftNavPages = [
  "FAQs",
  "Support",
  "Terms & conditions",
  "Privacy Policy",
];

const Footer = () => {
  return (
    <Root>
      <NavigationArea>
        <LeftNav>
          {leftNavPages.map((page, index) => (
            <Link key={index} passHref href={`${page === "Home" ? "/" : page}`}>
              <StyledButton key={index}>{page}</StyledButton>
            </Link>
          ))}
        </LeftNav>
      </NavigationArea>
      <MidBar />

      <LogoArea>
        <CopyrightNotice>
          <Logo
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 1,
            }}
          >
            Eazzy
            <span> Trade</span>
          </Logo>
          <CopyrightIcon
            style={{ margin: "4px", marginRight: "8px", fontSize: 26 }}
          />
          {new Date().getFullYear()}
        </CopyrightNotice>
        <Credit>
          Designed by <span> </span>
          <a
            href="https://www.instagram.com/developerak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            developerak
          </a>
        </Credit>
      </LogoArea>
    </Root>
  );
};

export default Footer;

const Root = styled.div`
  z-index: 2;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  padding: 30px;
  margin: 0px 8rem;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  justify-content: space-between;
  align-content: center;
  justify-items: stretch;
  align-items: center;
  gap: 1em 1em;
  @media (max-width: 1382px) {
    /* margin: 0px 0rem; */
  }
  @media (max-width: 900px) {
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas:
      "."
      "."
      ".";
    gap: 0.5em 0.5em;
    justify-content: center;
    align-content: center;
    justify-items: stretch;
    align-items: center;
  }
  && {
    margin: auto;
    margin-top: auto;
    margin-bottom: 0px;
    width: 92vw;
    background: transparent;
    box-shadow: none;
    backdrop-filter: blur(50px);
    background: rgb(11, 22, 53, 0.7);
    color: rgb(160, 170, 180);
    /* display: none; */
  }
`;

const NavigationArea = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr;
  gap: 1em 1em;
  grid-template-areas: ". . .";
  justify-content: center;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 0em 0em;
    grid-template-areas:
      "."
      "."
      ".";
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
  }
`;
const LeftNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const MidBar = styled.div`
  border-radius: 5px;
  background: rgb(160, 170, 180, 0.4);
  width: 2px;
  height: 350px;
  margin: auto;
  @media (max-width: 900px) {
    width: 300px;
    height: 4px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CopyrightNotice = styled.div`
  color: rgb(160, 170, 180);
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const StyledButton = styled(Button)`
  color: rgb(160, 170, 180);
  padding: 0.5rem 1rem;
  font-size: 18px;
  border-radius: 0.8rem;
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
const Credit = styled(Typography)`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1rem;
  color: rgb(160, 170, 180);
  display: flex;
  span {
    width: .3rem;
  }
  a {
    color: #0070f3;
  }
`;
