import { CircularProgress, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import styled from "@emotion/styled";

const ModalHeader = ({
  title,
  errorMessage,
  onClose,
  refetch,
  refetchLoading,
}) => {
  return (
    <Root>
      {/* <Title>{title}</Title> */}
      <Typography
        style={{
          color: "red",
          marginRight: "auto",
          marginLeft: "10px",
        }}
      >
        {errorMessage}
      </Typography>
      <Nav>
        <NavButton
          color="primary"
          onClick={onClose}
        >
          <CloseRoundedIcon />
        </NavButton>
      </Nav>
    </Root>
  );
};

export default ModalHeader;
const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav``;
const NavButton = styled(IconButton)`
  color: #a0aab4;
  &:hover {
    color: #0070f3;
  }
`;
