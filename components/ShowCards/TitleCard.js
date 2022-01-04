import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function TitleCard({ text, ...props }) {
  return (
    <Root {...props}>
      <TitleText>{text}</TitleText>
    </Root>
  );
}
const Root = styled(Box)`
  max-width: 58rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0px 0px;
  justify-content: start;
  justify-items: start;
  margin-left: 2rem;
`;
const TitleText = styled(Typography)`
  font-size: 25px;
  font-weight: 600;
  margin-right: auto;
`;
