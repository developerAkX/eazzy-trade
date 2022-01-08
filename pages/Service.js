import styled from "@emotion/styled";
import CanvasScreen from "../components/IcosahedronSphere/CanvasScreen";
import ServicesCard from "../components/ShowCards/ServicesCard";
import TitleCard from "../components/ShowCards/TitleCard";
import Fade from "react-reveal/Fade";
import data from "../data";
import Head from "next/head";
import { useMediaQuery } from "@mui/material";

export default function Service() {
  const isOk = useMediaQuery("(max-width: 890px)");
  return (
    <>
      <Root>
        <Head>
          <title>{data.ServiceScreen.head.title}</title>
          <meta
            name="description"
            content={data.ServiceScreen.head.description}
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Fade ssrFadeout right>
          <TitleCard
            text="Our Service"
            style={{ marginTop: "1.5rem", marginLeft: ".3rem" }}
          />
        </Fade>
        <ServicesArea>
          {data.ServiceScreen.body.Services.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              picSrc={service.imgSrc}
              link={service.link}
            />
          ))}
        </ServicesArea>
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
  .CanvasScreen {
    width: 100vw;
    height: 100vh;
  }
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem 4rem;
  @media (max-width: 775px) {
    margin: 1rem 2rem;
  }
`;
const ServicesArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
    "."
    ".";
  justify-content: start;
  justify-items: start;
  margin-top: 1rem;
  z-index: 2;
  /* min-height: 70vh; */
  @media (max-width: 775px) {
  }
`;
const CanvasScreenContainer = styled.div`
  position: fixed;
  z-index: 1;
  right: -40vw;
  bottom: -40vh;
`;
