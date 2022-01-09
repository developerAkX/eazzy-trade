import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import EmailModal from "./EmailModal";
import Fade from "react-reveal/Fade";
import data from "../../data";

export default function CourseCard({ title, description, picSrc }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Root elevation={0}>
      <EmailModal
        messageFor={title}
        titleBlue="Enrollment"
        titleWhite="Request"
        description={`Course Enrollment in progress, Fill this form to request Enrollment for ${title}`}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        clientMessage={data.email.feedBackForCourse}
      />
      <Fade ssrFadeout right>
        <ImageSection>
          <Image src={picSrc} alt="Picture" />
        </ImageSection>
        <InfoSection>
          <TitleText>{title}</TitleText>
          <DescriptionText>{description} </DescriptionText>
          <EnrollButton
            variant="contained"
            onClick={() => setIsModalOpen(true)}
          >
            Enroll
          </EnrollButton>
        </InfoSection>
      </Fade>
    </Root>
  );
}

const Root = styled(Paper)`
  max-width: 45rem;
  width: 82vw;
  /* height: 10rem; */
  border-radius: 0.9rem;
  background: #0a132f;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  justify-content: start;
  justify-items: start;
  grid-template-areas: ". .";
  overflow: hidden;
  backdrop-filter: blur(10px);
  background: rgb(11, 22, 53, 0.7);
  @media (max-width: 775px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "."
      ".";
  }
`;
const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  overflow: hidden;
  margin: auto;
  margin-left: 1.1rem;
  margin: 1.1rem;
  margin-right: 0;
  width: auto;
  height: 13.5rem;
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
  /* align-items: center;
  justify-content: center; */
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
