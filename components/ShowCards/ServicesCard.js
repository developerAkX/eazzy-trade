import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Fade from "react-reveal/Fade";


export default function ServicesCard({ title, description, picSrc, link }) {
  return (
    <Root elevation={0}>
      <Fade ssrFadeout right>
        <ImageSection>
          <Image src={picSrc} alt="Picture" />
        </ImageSection>
        <InfoSection>
          <TitleText>{title}</TitleText>
          <DescriptionText>{description} </DescriptionText>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <EnrollButton variant="contained">Join</EnrollButton>
          </a>
        </InfoSection>
      </Fade>
    </Root>
  );
}

const Root = styled(Paper)`
  max-width: 45rem;
  width: 82vw;
  border-radius: 0.9rem;
  background: #0a132f;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  gap: 0px 0px;
  justify-items: self-start;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background: rgb(11, 22, 53, 0.7);
  @media (max-width: 775px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      grid-template-areas:
      "."
      ".";
      justify-items: center;
    
  }
`;
const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  overflow: hidden;
  margin: auto;
  margin: 1.1rem;
  margin-left: 2.5rem;
  margin-right: 0;
  width: auto;
  @media (max-width: 775px) {
    margin: 1rem;
    height: auto;
    width: auto;
  }
  @media (max-width: 400px) {
    margin: 1rem;
    height: auto;
    width: auto;
  }
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 0.5rem;
  grid-auto-flow: row;
  justify-content: start;
  justify-items: start;
  grid-template-areas:
    "."
    "."
    ".";
  @media (max-width: 775px) {
    gap: 0.5rem;
    padding: 0rem 1.5rem 1rem;
  }
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
const TitleText = styled(Typography)`
  color: #0070f3;
  color: rgb(160 170 180);
  font-size: 21px;
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 25px;
`;
const DescriptionText = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  color: rgb(160 170 180);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 25px;
`;
const EnrollButton = styled(Button)`
  text-transform: capitalize;
  margin-left: auto;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 9px;
  border: 3px solid #0070f3;
  color: #0a132f;
  padding: 0.2rem 1rem;
  &:hover {
    border: 3px solid #0070f3;
    background: #0070f3;
    color: #0a132f;
  }
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 30px;
`;
