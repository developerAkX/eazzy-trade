import styled from "@emotion/styled";
import React from "react";
import CanvasScreen from "../components/IcosahedronSphere/CanvasScreen";
import CourseCard from "../components/ShowCards/CourseCard";
import TitleCard from "../components/ShowCards/TitleCard";
import profilePic from "../public/s6-01.jpg";

export default function Course() {
  return (
    <>
      <Root>
        <TitleCard
          text="Our Courses"
          style={{ marginTop: "1.5rem", marginLeft: ".3rem" }}
        />
        <CourseArea>
          <CourseCard
            title="Stock Market Course"
            description="Next.js will automatically determine the width and height of your
                        image based on the imported file. These values are used to prevent
                        Cumulative Layout Shift while your image is loading."
            picSrc={profilePic}
          />
          <CourseCard
            title="Stock Market Course"
            description="Next.js will automatically determine the width and height of your
                        image based on the imported file. These values are used to prevent
                        Cumulative Layout Shift while your image is loading."
            picSrc={profilePic}
          />
          <CourseCard
            title="Stock Market Course"
            description="Next.js will automatically determine the width and height of your
                        image based on the imported file. These values are used to prevent
                        Cumulative Layout Shift while your image is loading."
            picSrc={profilePic}
          />
        </CourseArea>
      </Root>
      <CanvasScreenContainer>
        <CanvasScreen
          className="CanvasScreen"
          style={{ width: "100vw", height: "100vh" }}
        />
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
