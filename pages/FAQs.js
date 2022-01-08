import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "react-reveal/Fade";
import data from "../data";
import CanvasScreen from "../components/IcosahedronSphere/CanvasScreen";
import { useMediaQuery } from "@mui/material";

export default function FAQs() {
  const isOk = useMediaQuery("(max-width: 890px)");
  return (
    <>
      <Root>
        <div>
          {data.FAQsContent.map((content, index) => (
            <AccordionStyled
              key={index}
              style={{
                borderTopLeftRadius: !index && "1rem",
                borderTopRightRadius: !index && "1rem",
                borderBottomLeftRadius:
                  data.FAQsContent.length === index + 1 && "1rem",
                borderBottomRightRadius:
                  data.FAQsContent.length === index + 1 && "1rem",
              }}
            >
              <AccordionSummaryStyled
                expandIcon={
                  <ExpandMoreIcon style={{ color: "rgb(160, 170, 180)" }} />
                }
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-content`}
              >
                <Fade ssrFadeout right>
                  <QuestionText>
                    Q{index + 1}. {content.Question}
                  </QuestionText>
                </Fade>
              </AccordionSummaryStyled>
              <AccordionDetails>
                <AnswerText>{content.Answer} </AnswerText>
              </AccordionDetails>
            </AccordionStyled>
          ))}
        </div>
      </Root>
      <CanvasScreenContainer>
        <Fade ssrFadeout right>
          <CanvasScreen
            className="CanvasScreen"
            style={{ width: isOk ? "100vh" : "100vw", height: "100vh" }}
          />
        </Fade>
      </CanvasScreenContainer>
    </>
  );
}

const Root = styled.div`
  display: flex;

  z-index: 1000;
  padding: 2rem;
  @media (max-width: 50px) {
    padding: 1rem;
  }
  margin-top: 1rem;
`;
const AccordionStyled = styled(Accordion)`
  max-width: 40rem;
  backdrop-filter: blur(10px);
  background: rgb(11, 22, 53, 0.7);
  color: rgb(160, 170, 180);
`;
const AccordionSummaryStyled = styled(AccordionSummary)`

`;
const QuestionText = styled(Typography)`
  font-weight: 600;
  font-size: 18px;
`;
const AnswerText = styled(Typography)``;

const CanvasScreenContainer = styled.div`
  position: fixed;
  z-index: 1;
  right: -40vw;
  bottom: -40vh;
`;
