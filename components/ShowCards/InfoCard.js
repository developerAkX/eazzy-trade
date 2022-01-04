import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export default function InfoCard({ reverse, title, description }) {
  return (
    <Root>
      <TextSection>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </TextSection>
    </Root>
  );
}
const Root = styled.div`
  margin: 2rem;
  @media (max-width: 600px) {
  }
  max-width: 70rem;
`;
const TitleText = styled(Typography)`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 1rem;
`;
const TextSection = styled(Typography)`
  padding: 0.5rem;
`;
const DescriptionText = styled.div`
  font-size: 18px;
`;
