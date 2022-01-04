import styled from "@emotion/styled";
import { Backdrop, Divider, Fade, Modal } from "@mui/material";
import ModalHeader from "./ModalHeader";

const FluentModal = ({
  children,
  open,
  handleClose,
  customBarackPoint,
  title,
  BodyStyle,
  scrollX,
  MainStyle,
}) => {
  return (
    <Root
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      customBarackPoint={customBarackPoint}
      BackdropProps={{
        timeout: 500,
        style: {
          background: "transparent",
          zIndex: "-1",
        },
      }}
    >
      <Fade in={open}>
        <Main customBarackPoint={customBarackPoint} style={MainStyle}>
          <ModalHeader title={title} onClose={handleClose} />

          <Body scrollX={scrollX} style={BodyStyle}>
            {children}
            <BottomBar />
          </Body>
        </Main>
      </Fade>
    </Root>
  );
};

export default FluentModal;
const Root = styled(Modal)`
  display: grid;
  place-items: center;
  background: #ffffff10;
  backdrop-filter: blur(17px);
  @media (max-width: ${({ customBarackPoint }) => customBarackPoint}px) {
    backdrop-filter: blur(0px);
  }
`;
const Main = styled.div`
  width: 90vw;
  max-width: 60rem;
  height: auto;
  max-height: 80rem;
  background: #ffffff;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0em 0em;
  grid-template-areas:
    "."
    ".";
  border-radius: 10px;
  box-shadow: 0 6.2px 10px rgba(0, 0, 0, 0.07),
    0 11.9px 14.6px rgba(0, 0, 0, 0.049), 0 17.8px 17.1px rgba(0, 0, 0, 0.036),
    0 24.6px 18.8px rgba(0, 0, 0, 0.028), 0 33.1px 20.2px rgba(0, 0, 0, 0.023),
    0 43.5px 22.1px rgba(0, 0, 0, 0.019), 0 56px 26px rgba(0, 0, 0, 0.012),
    0 -24.6px 18.8px rgba(0, 0, 0, 0.028), 0 -33.1px 20.2px rgba(0, 0, 0, 0.023),
    0 -43.5px 22.1px rgba(0, 0, 0, 0.019), 0 -56px 26px rgba(0, 0, 0, 0.012);
  overflow: hidden;
  background: #070e22;

  color: rgb(160, 170, 180);
  max-height: 100vh;
  @media (max-width: ${({ customBarackPoint }) => customBarackPoint}px) {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0px;
  }
`;
const DivideBar = styled(Divider)`
  background: #a0aab4;
  margin: 6px 17px;
  height: 2.5px;
  border-radius: 3px;
`;
const BottomBar = styled(Divider)`
  && {
    color: transparent;
    background: transparent;
  }
`;
const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 1em 1em;
  grid-template-areas:
    "."
    ".";
  max-width: 65rem;

  padding: 25px;
  border-radius: 17px;

  @media (max-width: 404px) {
    && .button {
      font-size: 0.97rem;
      .buttonIconSvg {
        width: 19px;
      }
      .buttonIcon {
        font-size: 1.5rem;
      }
    }
  }
  padding: 30px 30px 0px;
  /* overflow-y: scroll; */
  overflow-x: ${({ scrollX }) => (scrollX ? "scroll" : "hidden")};
  @media (max-width: 670px) {
    padding: 20px 20px 0px;
  }
  &::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #0b1635; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #324ca06b; /* creates padding around scroll thumb */
  }
`;
