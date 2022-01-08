import styled from "@emotion/styled";
import React from "react";
import CanvasScreen from "../components/IcosahedronSphere/CanvasScreen";
import CourseCard from "../components/ShowCards/CourseCard";
import TitleCard from "../components/ShowCards/TitleCard";
import Fade from "react-reveal/Fade";
import data from "../data";
import Head from "next/head";
import { useMediaQuery } from "@mui/material";

export default function Course() {
  const isOk = useMediaQuery("(max-width: 890px)");

  return (
    <>
      <Root>
        <Head>
          <title>{data.CoursesScreen.head.title}</title>
          <meta
            name="description"
            content={data.CoursesScreen.head.description}
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Fade ssrFadeout right>
          <TitleCard
            text="Our Courses"
            style={{ marginTop: "1.5rem", marginLeft: ".3rem" }}
          />
        </Fade>
        <CourseArea>
          {data.CoursesScreen.body.courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              picSrc={course.imgSrc}
            />
          ))}
        </CourseArea>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem 4rem;
  @media (max-width: 775px) {
    margin: 1rem 2rem;
  }
`;
const CourseArea = styled.div`
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
  @media (max-width: 775px) {
  }
`;
const CanvasScreenContainer = styled.div`
  position: fixed;
  z-index: 1;
  right: -40vw;
  bottom: -40vh;
`;
