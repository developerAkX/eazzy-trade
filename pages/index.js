import styled from "@emotion/styled";
import { Button, Card, Paper, useMediaQuery } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/AppBar/Header";
import CanvasScreen from "../components/IcosahedronSphere/CanvasScreen";
import InfoCard from "../components/ShowCards/InfoCard";
import styles from "../styles/Home.module.css";
import InfoImgCard from "./../components/ShowCards/InfoImgCard";
import profilePic from "../public/s6-01.jpg";
import TitleCard from "../components/ShowCards/TitleCard";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">EazzyTrade.in !</a>
        </h1>
        <p className={styles.description}>
          Get started by
          <EnrolmentButton variant="outlined">Enrolling</EnrolmentButton>
        </p>
      </main>
      <div className={styles.canvasContainer}>
        <CanvasScreen
          style={{
            width: isMobile ? "100vw" : "calc(100vw - 10px)",
            height: "100vh",
          }}
        />
      </div>

      <TranslucentCard elevation={9}>
        <TitleCard text="About Us" />
        <InfoImgCard
          picSrc={profilePic}
          title="Linking between pages"
          description="Next.js has a file-system based router built on the concept of
                pages. When a file is added to the pages directory, it's
                automatically available as a route. The files inside the pages
                directory can be used to define most common patterns."
        />
        <InfoImgCard
          picSrc={profilePic}
          title="Linking between pages"
          description="Next.js has a file-system based router built on the concept of
                pages. When a file is added to the pages directory, it's
                automatically available as a route. The files inside the pages
                directory can be used to define most common patterns."
          reverse
        />
      </TranslucentCard>
      <TranslucentCard elevation={9}>
        <TitleCard text="About Us" />
        <InfoImgCard
          picSrc={profilePic}
          title="Linking between pages"
          description="Next.js has a file-system based router built on the concept of
                pages. When a file is added to the pages directory, it's
                automatically available as a route. The files inside the pages
                directory can be used to define most common patterns."
        />
        <InfoCard
          title="Linking between pages"
          description="Next.js has a file-system based router built on the concept of
                pages. When a file is added to the pages directory, it's
                automatically available as a route. The files inside the pages
                directory can be used to define most common patterns."
        />
      </TranslucentCard>
    </div>
  );
}

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
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;
