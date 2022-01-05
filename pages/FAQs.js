import styled from "@emotion/styled";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQs() {
  return (
    <Root>
      <div>
        {FAQsContent.map((content, index) => (
          <AccordionStyled key={index}>
            <AccordionSummaryStyled
              expandIcon={
                <ExpandMoreIcon style={{ color: "rgb(160, 170, 180)" }} />
              }
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-content`}
            >
              <QuestionText>
                Q{index + 1}. {content.Question}
              </QuestionText>
            </AccordionSummaryStyled>
            <AccordionDetails>
              <AnswerText>{content.Answer} </AnswerText>
            </AccordionDetails>
          </AccordionStyled>
        ))}
      </div>
    </Root>
  );
}

const Root = styled.div`
  /* display: grid;
  justify-content: start;
  justify-items: start; */
  padding: 2rem;
  @media (max-width: 50px) {
    padding: 1rem;
  }
  margin-top: 1rem;
  .css-1irxy1h-MuiPaper-root-MuiAccordion-root:first-of-type {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .css-1irxy1h-MuiPaper-root-MuiAccordion-root:last-of-type {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;
const AccordionStyled = styled(Accordion)`
  backdrop-filter: blur(50px);
  background: rgb(11, 22, 53, 0.7);
  color: rgb(160, 170, 180);
`;
const AccordionSummaryStyled = styled(AccordionSummary)`
  /* font-weight: 700; */
`;
const QuestionText = styled(Typography)`
  font-weight: 600;
  font-size: 18px;
`;
const AnswerText = styled(Typography)``;

const FAQsContent = [
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
  {
    Question: `Which course is best for stock market?`,
    Answer: `The minimum educational qualification required to become a stock broker is a graduation with at least 2 years of experience in a stock broking firm. A sub-broker (the previous stage of being a broker) needs to have passed the class 12th standard to be eligible for his job.`,
  },
];
