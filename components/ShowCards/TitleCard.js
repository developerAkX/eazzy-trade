import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

export default function TitleCard({ text, ...props }) {
  return (
    <Root {...props}>
      <Fade right>
        <TitleText>{text}</TitleText>
      </Fade>
    </Root>
  );
}
const Root = styled.div`
  max-width: 58rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0px 0px;
  justify-content: start;
  justify-items: start;
  @media (max-width: 600px) {
    padding: 0.2rem 0.6rem;
  }
`;
const TitleText = styled(Typography)`
  font-size: 25px;
  font-weight: 600;
  margin-right: auto;
  text-transform: uppercase;
`;
