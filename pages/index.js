import styled from "@emotion/styled";
import { Button, Card, Paper, useMediaQuery } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/AppBar/Header";
import CanvasScreen from "../components/IcosahedronSphere/CanvasScreen";
import InfoCard from "../components/ShowCards/InfoCard";
import styles from "../styles/Home.module.css";
import InfoImgCard from "./../components/ShowCards/InfoImgCard";
import TitleCard from "../components/ShowCards/TitleCard";
import Link from "next/link";
import profilePic from "../public/0733ba760b29378474dea0fdbcb97107.jpg";
import AboutUsPic from "../public/Copy-of-Pick-a-school-2.png";
import SchoolTeacherPic from "../public/clip-schoolteacher-near-the-blackboard.png";
import HardWorkingPic from "../public/clip-hardworking-man.png";
import SearchingCoursePic from "../public/clip-searching-for-universities-online.png";
import ReviewCard from "../components/ShowCards/ReviewCard";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 490px)");

  return (
    <div className={styles.container}>
      <Head>
        <title>Eazzy Trade</title>
        <meta name="description" content="Educational Platform | Get financially educated." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.logoS}>EazzyTrade.in !</span>
        </h1>
        <p className={styles.description}>
          Get started by
          <Link passHref href="/Course">
            <EnrolmentButton variant="outlined">Enrolling</EnrolmentButton>
          </Link>
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
        <TitleCard text="HOW IT WORKS?" />
        <InfoImgCard
          picSrc={SearchingCoursePic}
          title="Pick a Course"
          description="Pick a Course based on your learning objective. Pick a Course – Personal Finance,  Technical Analysis, Equity Research and others based on what you intend to learn."
        />
        <InfoImgCard
          picSrc={SchoolTeacherPic}
          title="Learn"
          description="Learn from our mix of Videos, eBooks, live courses and examples. Interact with our team and other students for collaborative learning experience."
          reverse
        />
        <InfoImgCard
          picSrc={HardWorkingPic}
          title="Practice"
          description="Practice questions and Submit assignments to Get Experience and meet your dream goal."
        />
      </TranslucentCard>
      <TranslucentCard elevation={9}>
        <TitleCard text="OUR REVIEWS" />
        <div className="reviews">
          <ReviewCard
            picSrc={profilePic}
            name="Abhinav Singh"
            description="One of the best courses I have taken by far. Everything from the videos to assignments is amazing and informative. It has helped me tremendously. I encourage everyone to take it. "
          />

          <ReviewCard
            picSrc={profilePic}
            name="Abhinav Singh"
            description="One of the best courses I have taken by far. Everything from the videos to assignments is amazing and informative. It has helped me tremendously. I encourage everyone to take it. "
          />

          <ReviewCard
            picSrc={profilePic}
            name="Abhinav Singh"
            description="One of the best courses I have taken by far. Everything from the videos to assignments is amazing and informative. It has helped me tremendously. I encourage everyone to take it. "
          />
        </div>
      </TranslucentCard>
      <TranslucentCard elevation={9}>
        <TitleCard text="About Us" />
        <InfoImgCard
          picSrc={AboutUsPic}
          title="Educational platform"
          description="Eazzy Trade is an educational platform that focuses on Finance in an applied manner. Here, every learner becomes part of the community and then chats, interacts and forms groups with other learners and experts to learn about course content."
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
