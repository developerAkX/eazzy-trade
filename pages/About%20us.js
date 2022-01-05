import styled from "@emotion/styled";
import { Card, Divider } from "@mui/material";
import InfoImgCard from "../components/ShowCards/InfoImgCard";
import InfoCard from "../components/ShowCards/InfoCard";
import TitleCard from "../components/ShowCards/TitleCard";

export default function AboutUs() {
  return (
    <Root>
      <TitleCard text="About Us" />
      <TranslucentCard elevation={9}>
        <InfoCard
          title="Linking between pages"
          description="
          Next.js has a file-system based router built on the concept of
          pages. When a file is added to the pages directory, it's
          automatically available as a route. The files inside the pages
          directory can be used to define most common patterns.
          Next.js has a file-system based router built on the concept of
          pages. When a file is added to the pages directory, it's
          automatically available as a route. The files inside the pages
          directory can be used to define most common patterns.
          "
        />
      </TranslucentCard>

      <TranslucentCard elevation={9}>
        <InfoCard
          title="Linking between pages"
          description="
          Next.js has a file-system based router built on the concept of
          pages. When a file is added to the pages directory, it's
          automatically available as a route. The files inside the pages
          directory can be used to define most common patterns.
          Next.js has a file-system based router built on the concept of
          pages. When a file is added to the pages directory, it's
          automatically available as a route. The files inside the pages
          directory can be used to define most common patterns.
          "
        />
      </TranslucentCard>
    </Root>
  );
}

Divider;
const Root = styled.div`
  height: 100vh;
  color: #fff;
  /* display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column; */
  display: grid;

  gap: 2rem;
  justify-content: start;
  justify-items: start;
  padding: 2rem;
  @media (max-width: 50px) {
    padding: 1rem;
  }
  margin-top: 1rem;
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
