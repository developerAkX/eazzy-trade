import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Link from "next/link";
import Fade from "react-reveal/Fade";

export default function Custom404() {
  return (
    <Root>
      <Fade top>
        <h1>500 - Internal Server Error</h1>
      </Fade>

      <Link passHref href="/">
        <Fade top>
          <EnrolmentButton variant="outlined">
            Go Back to Home Page
          </EnrolmentButton>
        </Fade>
      </Link>
    </Root>
  );
}

const Root = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #99a3b5;
  }
  margin-top: 4rem;
  @media (max-width:600px) {
    margin-top: 3rem;
  }
`;

const EnrolmentButton = styled(Button)`
  text-transform: capitalize;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 10px;
  border: 3px solid;
  &:hover {
    border: 3px solid #0070f3;
    background: #0070f3;
    color: #000;
  }
`;
