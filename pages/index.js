import styled from "@emotion/styled";
import { Button, Card, Typography, useMediaQuery } from "@mui/material";
import Head from "next/head";
import CanvasScreen from "../components/IcosahedronSphere/CanvasScreen";
import InfoImgCard from "./../components/ShowCards/InfoImgCard";
import TitleCard from "../components/ShowCards/TitleCard";
import Link from "next/link";
import ReviewCard from "../components/ShowCards/ReviewCard";
import Fade from "react-reveal/Fade";
import data from "../data";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 490px)");

  return (
    <Root>
      <Head>
        <title>{data.LandingScreen.head.title}</title>
        <meta
          name="description"
          content={data.LandingScreen.head.description}
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Hero>
        <Fade ssrFadeout bottom>
          <TitleText component="h1">
            {data.LandingScreen.body.title.normal}
            <BlueText> {data.LandingScreen.body.title.highlighted}</BlueText>
          </TitleText>
        </Fade>

        <Fade ssrFadeout bottom>
          <Description>
          {data.LandingScreen.body.title.description}
            <Link passHref href="/Course">
              <EnrolmentButton variant="outlined">Enroll</EnrolmentButton>
            </Link>
          </Description>
        </Fade>
      </Hero>

      <Canvas>
        <Fade ssrFadeout top>
          <CanvasScreen
            style={{
              width: isMobile ? "100vw" : "calc(100vw - 10px)",
              height: "100vh",
            }}
          />
        </Fade>
      </Canvas>

      {data.LandingScreen.body.sections.map((section, index) => (
        <TranslucentCard elevation={9} key={index}>
          <TitleCard text={section.title} />

          {section.contents.map((content, index) => (
            <Fade
              ssrFadeout
              right={index % 2 === 0}
              left={index % 2 !== 0}
              key={index}
            >
              <InfoImgCard
                picSrc={content.imgSrc}
                title={content.title}
                description={content.description}
                reverse={index % 2 !== 0}
              />
            </Fade>
          ))}
        </TranslucentCard>
      ))}

      <TranslucentCard elevation={9}>
        <TitleCard text="OUR REVIEWS" />

        <Fade ssrFadeout right>
          <div className="reviews">
            {data.LandingScreen.body.reviewsSection.map((review, index) => (
              <ReviewCard
                key={index}
                picSrc={review.profilePic}
                name={review.name}
                description={review.text}
              />
            ))}
          </div>
        </Fade>
      </TranslucentCard>

      <TranslucentCard elevation={9}>
        <TitleCard text="About Us" />

        <Fade ssrFadeout right>
          <InfoImgCard
            picSrc={data.LandingScreen.body.aboutUsSection.imgSrc}
            title={data.LandingScreen.body.aboutUsSection.bold}
            description={data.LandingScreen.body.aboutUsSection.text}
          />
        </Fade>
      </TranslucentCard>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Canvas = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  margin-top: 50vh;
  left: 0px;
  right: 0px;
`;

const Hero = styled.div`
  min-height: 100vh;
  padding: 4rem 0 10rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  z-index: 1;
`;

const TitleText = styled(Typography)`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  font-weight: 700;
  color: #fafafa;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 3.5rem;
  }
  @media (max-width: 400px) {
    font-size: 3rem;
  }
`;

const BlueText = styled.span`
  color: #0070f3;
  text-decoration: none;
`;

const Description = styled.p`
  text-align: center;
  margin: 3rem 0rem;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const EnrolmentButton = styled(Button)`
  text-transform: capitalize;
  margin-left: 1rem;
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

const TranslucentCard = styled(Card)`
  max-width: 60rem;
  width: 92vw;
  margin: calc(2rem) auto;
  border-radius: 1.2rem;
  box-shadow: none;
  backdrop-filter: blur(8px);
  background: rgb(11, 22, 53, 0.7);
  color: rgb(160, 170, 180);
  padding: 2rem;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  z-index: 10;
  @media (max-width: 450px) {
    padding: 1rem;
  }
  & .reviews {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 2rem;
    grid-template-areas: ". . .";
    @media (max-width: 1040px) {
      width: auto;
      justify-items: center;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        "."
        "."
        ".";
    }
    @media (max-width: 700px) {
      gap: 3rem 0px;
    }
    @media (max-width: 600px) {
      gap: 4rem 0px;
    }
  }
`;
