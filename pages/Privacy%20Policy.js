import { Card, Divider } from "@mui/material";
import InfoImgCard from "../components/ShowCards/InfoImgCard";
import InfoCard from "../components/ShowCards/InfoCard";
import TitleCard from "../components/ShowCards/TitleCard";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

export default function PrivacyPolicy() {
  return (
    <Root>
      <TitleCard text="PRIVACY POLICY" />
      {content.map((section, index) => (
        <TranslucentCard key={index} elevation={9}>
          <Fade bottom>
            <InfoCard title={section.title} description={section.description} />
          </Fade>
        </TranslucentCard>
      ))}
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  gap: 2rem;
  justify-content: start;
  justify-items: start;
  padding: 2rem;
  @media (max-width: 500px) {
    padding: 1rem;
  }
  z-index: 1000;
  margin-top: 4rem;
`;

const TranslucentCard = styled(Card)`
  max-width: 60rem;
  border-radius: 1.2rem;
  box-shadow: none;
  backdrop-filter: blur(8px);
  background: rgb(11, 22, 53, 0.7);
  color: rgb(160, 170, 180);
  z-index: 10;
  display: grid;
  align-items: stretch;
  gap: 2rem;
  padding: 2rem;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const content = [
  {
    title: "",
    description: (
      <>
        “aymper markets” respects your privacy. Please see our privacy notice
        For important information and disclosures relating to the collection and
        Use of your personally identifiable information in connection with your
        Use of the services.
        <br />
        <br />
        1). We respect the privacy of our members and are serious about
        Protecting your online privacy. This policy will explain how we gather
        And use personal information submitted. Therefore, by registering and
        Using this site, you are agreeing and accepting this policy. Information
        May be used in additional ways as posted on this privacy policy in the
        Future. As if we suspect a user of committing fraud, in which case user
        Information may be shared during the course of our investigation. We
        Reserve the right to change this policy at any time. If we make a
        Material change regarding how we use your personal information, we may
        Notify you of the existence and location of the new or revised policy
        Through email or by posting the changes online at our website
        <br />
        <br />
        2). We will not sell or share user information to other advertisers or
        Businesses in order to enhance the service provided to our users also
        Description of the categories of personal information disclosed. We will
        Only collect information that is volunteered during the registration
        Process or in any responses to specific information requests. We do need
        This information in order to provide services that you request. We may
        Also collect your ip address and logging information for your safety for
        Future logins.
        <br />
        <br />
        3). Members cannot use others information to create account or they are
        Not liable to use others credit, debit cards or any other transaction
        Process, it will be the personal choice and against our privacy policy,
        And this can’t be entertained at that time. If anyone found using others
        Account for transaction or someone claimed, user will be responsible and
        The account will be terminated permanently.
        <br />
        <br />
        4). We use cookies and other technologies to track the use of our site
        And for certain advertising purposes
        <br />
        <br />
        5). The personal information we collect is to help us better understand
        Your needs, to provide you with personalized and efficient service, and
        For other purposes described in this privacy policy. We generally obtain
        Personal information directly through the information that you provide
        To “aymper markets”. We also may obtain personal information
        Automatically, through the use of cookies and other technologies, and in
        Some instances from third parties, such as companies that sponsor
        Programs or conferences in which “aymper markets” participates.
      </>
    ),
  },
];
