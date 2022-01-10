import React from "react";
import styled from "@emotion/styled";
import { capitalize, Typography } from "@mui/material";

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
  max-width: 70rem;
`;
const TitleText = styled(Typography)`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
  }
`;
const TextSection = styled(Typography)`
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;
const DescriptionText = styled(Typography)`
  font-size: 18px;
  line-height: 1.8rem;
  letter-spacing: 0.05rem;
  text-transform: capitalize;
`;
