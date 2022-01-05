import React from "react";
import styled from "@emotion/styled";
import { Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function InfoImgCard({
  picSrc,
  reverse,
  title,
  picProps,
  description,
}) {
  const isTablet = useMediaQuery("(max-width: 600px)");
  return (
    <Root>
      {isTablet ? (
        <>
          <ImageSection>
            <Image src={picSrc} alt="Picture of the author" {...picProps} />
          </ImageSection>
          <TextSection>
            <TitleText>{title}</TitleText>
            <DescriptionText>{description}</DescriptionText>
          </TextSection>
        </>
      ) : (
        <>
          {reverse ? (
            <>
              <TextSection>
                <TitleText>{title}</TitleText>
                <DescriptionText>{description}</DescriptionText>
              </TextSection>
              <ImageSection>
                <Image src={picSrc} alt="Picture of the author" />
              </ImageSection>
            </>
          ) : (
            <>
              <ImageSection
                style={{ borderRadius: "1.1rem", overflow: "hidden" }}
              >
                <Image src={picSrc} alt="Picture of the author" />
              </ImageSection>
              <TextSection>
                <TitleText>{title}</TitleText>
                <DescriptionText>{description}</DescriptionText>
              </TextSection>
            </>
          )}
        </>
      )}
    </Root>
  );
}
const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 1.5rem;
  grid-auto-flow: row;
  margin-top: 2rem;
  align-items: center;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: ".";
  }
  @media (max-width: 500px) {
    margin-top: 1rem;
  }
  max-width: 70rem;
`;
const ImageSection = styled.div`
  border-radius: 1.1rem;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;
const TitleText = styled(Typography)`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 1rem;
`;
const TextSection = styled(Typography)`
  padding: 1rem;
  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`;
const DescriptionText = styled.div`
  font-size: 18px;
`;
