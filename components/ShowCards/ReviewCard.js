import React from "react";
import styled from "@emotion/styled";
import { Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function ReviewCard({ picSrc, name, description }) {
  return (
    <Root>
      <ImageSection>
        <div className="Box">
          <Image src={picSrc} alt="Picture of the author" />
        </div>
      </ImageSection>
      <TextSection>
        <TitleText>{name}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </TextSection>
    </Root>
  );
}
const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 1.5rem 1.5rem;
  grid-auto-flow: row;
  align-items: center;
  max-width: 20rem;
  border-radius: 1rem;
  padding: 25% 0.5rem 0.5px;
  margin-top: 50%;
  background: #101a3c;
  @media (max-width: 1040px) {
    margin-top: 5rem;
    padding: 9% 0.5rem 0.5px;
}
@media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: ".";
    padding: 6.5rem 0.5rem 0.5px;
  }
`;
const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .Box {
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    position: absolute;
    transform: translateY(-40%);
    display: flex;
    width: 10rem;
    height: auto;
    @media (max-width: 600px) {
      transform: translateY(-60%);
    }
  }
`;
const TitleText = styled(Typography)`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 1rem;
  text-align: center;
`;
const TextSection = styled(Typography)`
  padding: 0px 1rem 1rem;
  @media (max-width: 600px) {
    padding: 0px 1rem 0.5rem;
  }
`;
const DescriptionText = styled.div`
  text-align: center;
  font-size: 18px;
`;
