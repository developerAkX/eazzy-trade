import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CopyrightIcon from "@mui/icons-material/Copyright";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import EmailModal from "../ShowCards/EmailModal";
import { useState } from "react";
import Fade from "react-reveal/Fade";
const leftNavPages = ["FAQs", "Terms & conditions", "Privacy Policy"];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Root>
      <EmailModal
        titleBlue="Get"
        titleWhite="Help"
        description={`Leave a message! fill this form to request for Support.`}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        messageFor="Support"
      />

      <Fade ssrFadeout bottom>
        <NavigationArea>
          <LeftNav>
            {leftNavPages.map((page, index) => (
              <Link
                key={index}
                passHref
                href={`${page === "Home" ? "/" : page}`}
              >
                <StyledButton key={index}>{page}</StyledButton>
              </Link>
            ))}
            <StyledButton onClick={() => setIsModalOpen(true)}>
              Support
            </StyledButton>
          </LeftNav>
        </NavigationArea>
      </Fade>

      <MidBar />

      <Fade ssrFadeout bottom>
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
          <URiEngin />
        </LogoArea>
      </Fade>
    </Root>
  );
};

export default Footer;

const Root = styled.div`
  z-index: 2;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  justify-content: space-between;
  align-content: center;
  justify-items: stretch;
  align-items: center;
  gap: 1em 1em;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "."
      "."
      ".";
    gap: 0.5em 0.5em;
    justify-content: center;
  }
  && {
    margin-top: auto;
    margin-bottom: 0px;
    margin: 0px 2rem;
    /* width: 92vw; */
    background: transparent;
    box-shadow: none;
    backdrop-filter: blur(7px);
    background: rgb(11, 22, 53, 0.7);
    color: rgb(160, 170, 180);
    @media (max-width: 600px) {
      margin: 0px 1rem;
    }
    margin-bottom: 0px;
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
  /* background: rgb(160, 170, 180, 0.4); */
  width: 2px;
  height: 350px;
  margin: auto;
  @media (max-width: 900px) {
    width: 300px;
    height: 4px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  display: none;
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
const Carbardos = styled(Typography)`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1rem;
  color: rgb(160, 170, 180);
  display: flex;
  span {
    width: 0.3rem;
  }
  a {
    color: #0070f3;
    transform: lowercase;
  }
`;
const URiEngin = () => (
  <Carbardos>
    Designed by
    <span> </span>
    <a
      href="https://developerak.vercel.app/ "
      target="_blank"
      rel="noopener noreferrer"
    >
      Developerak
    </a>
  </Carbardos>
);
