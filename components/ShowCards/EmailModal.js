import styled from "@emotion/styled";
import { Box } from "@mui/system";
import FluentModal from "./FluentModal";
import { styled as styles } from "@mui/material/styles";
import {
  Alert,
  Button,
  Divider,
  FormControl,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import validator from "validator";

export default function EmailModal(props) {
  const {
    isModalOpen,
    handleClose,
    titleBlue,
    titleWhite,
    description,
    messageFor,
  } = props;
  const [isFormValid, setIsFormValid] = useState(false);
  const [isErrorAlert, setIsErrorAlert] = useState(false);
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    messageFor,
  });
  const [isValid, setIsValid] = useState({
    name: {
      status: true,
    },
    email: {
      status: true,
    },
    phoneNumber: {
      status: true,
    },
    message: {
      status: true,
    },
  });
  const [{ data, error }, sendEmail] = useAxios(
    {
      url: "/api/sendEmail",
      method: "POST",
      data: formData,
    },
    { manual: true }
  );

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "phoneNumber") {
      const newValue = value.replace(/[^0-9]/g, "");
      setFormData((preValue) => {
        return {
          ...preValue,
          phoneNumber: newValue,
        };
      });
    } else if (!(name === "phoneNumber")) {
      setFormData((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }

    setIsValid((preValue) => ({
      ...preValue,
      name: {
        status:
          name === "name"
            ? validator.isLength(value, {
                min: 2,
                max: 26,
              }) && validator.matches(value, /^[a-zA-Z ]+$/i)
            : preValue.name.status,
      },
      email: {
        status:
          name === "email" ? validator.isEmail(value) : preValue.email.status,
      },
      phoneNumber: {
        status:
          name === "phoneNumber"
            ? validator.isMobilePhone(value, ["en-IN"])
            : preValue.phoneNumber.status,
      },
      message: {
        status:
          name === "message"
            ? validator.isLength(value, {
                min: 10,
                max: 2000,
              })
            : preValue.message.status,
      },
    }));
    setFormData((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSendEmail = (event) => {
    event.preventDefault();
    if (isFormValid) {
      sendEmail();
      if (data) {
        setIsSuccessAlert(true);
        setIsFormValid(false);
        setTimeout(() => {
          handleClose();
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
            messageFor,
          });
        }, 2000);
      }
      if (error) {
        setIsErrorAlert(true);
        setIsFormValid(false);
        setTimeout(() => {
          handleClose();
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
            messageFor,
          });
        }, 2000);
      }
    } else setIsErrorAlert(true);
  };

  const handleAlertClose = () => {
    setIsErrorAlert(false);
    setIsSuccessAlert(false);
  };
  useEffect(() => {
    if (
      isValid.name.status &&
      isValid.email.status &&
      isValid.phoneNumber.status &&
      isValid.message.status &&
      !(formData.name === "") &&
      !(formData.email === "") &&
      !(formData.phoneNumber === "") &&
      !(formData.message === "")
    ) {
      return setIsFormValid(true);
    } else {
      return setIsFormValid(false);
    }
  }, [formData, isValid]);
  return (
    <>
      <FluentModal
        customBarackPoint={740}
        open={isModalOpen}
        handleClose={handleClose}
      >
        <Snackbar
          open={isErrorAlert || isSuccessAlert}
          autoHideDuration={6000}
          onClose={handleAlertClose}
        >
          <Alert
            onClose={handleAlertClose}
            severity={
              isSuccessAlert ? "success" : isErrorAlert ? "error" : "warning"
            }
            elevation={50}
          >
            {isSuccessAlert
              ? "Request Sended Successfully !"
              : isErrorAlert
              ? "Request failed !"
              : ""}
          </Alert>
        </Snackbar>
        <Root>
          <TitleArea>
            <Title>
              <span
                style={{
                  color: focusColor,
                }}
              >
                {titleBlue}
              </span>
              {` ${titleWhite}`}
            </Title>
            <TitleInfo>{description}</TitleInfo>
          </TitleArea>
          <InputArea onChange={handleChange}>
            <CssTextField
              require
              label="Name"
              name="name"
              id="name"
              type="text"
              value={formData.name}
              error={!isValid.name.status}
              helperText={"Your should not contain any number !"}
            />
            <ContactArea>
              <CssTextField
                require
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                error={!isValid.email.status}
                helperText={"Your Email should be valid !"}
              />
              <CssTextField
                require
                name="phoneNumber"
                type="phoneNumber"
                label="Phone number"
                value={formData.phoneNumber}
                error={!isValid.phoneNumber.status}
                helperText={"Your Phone number should be valid !"}
              />
            </ContactArea>
            <CssTextField
              require
              multiline
              label="Message"
              name="message"
              type="message"
              value={formData.message}
              error={!isValid.message.status}
              helperText={"At lest type 10 characters of message !"}
              minRows={11}
            />
            <EnrollButton
              type="submit"
              variant="contained"
              onClick={handleSendEmail}
              disabled={!isFormValid}
            >
              Send Request
            </EnrollButton>
          </InputArea>
          <BottomBar />
        </Root>
      </FluentModal>
    </>
  );
}
const nonFocusColor = "#a0aab4";
const focusColor = "#0070f3";

const CssTextField = styles(TextField)({
  "& .MuiFormHelperText-root": {
    color: nonFocusColor,
  },
  "& .MuiFormHelperText-root.Mui-focused": {
    color: focusColor,
  },
  "& label.Mui-focused": {
    color: focusColor,
  },
  "& input": {
    color: nonFocusColor,
    lineHeight: "22px",
    fontSize: "16px",
    fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
  },
  "& .Mui-focused input": {
    color: focusColor,
    fontWeight: "600",
  },
  "& textarea": {
    color: nonFocusColor,
    lineHeight: "22px",
    fontSize: "16px",
    fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
    fontWeight: "600",
  },
  "& textarea::-webkit-scrollbar": {
    width: "10px" /* width of the entire scrollbar */,
  },

  "& textarea::-webkit-scrollbar-track": {
    background: "#0b1635" /* color of the tracking area */,
    borderRadius: "0.2rem",
    overflow: "hidden",
  },

  "& textarea::-webkit-scrollbar-thumb": {
    backgroundColor: "#324ca06b" /* creates padding around scroll thumb */,
    borderRadius: "0.2rem",
  },
  "& .Mui-focused textarea": {
    color: focusColor,
    fontWeight: "600",
  },
  "& label": {
    color: nonFocusColor,
    fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "22px",
    background: "#070d20",
    paddingRight: "5px",
  },
  "&:hover label": {
    color: focusColor,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: nonFocusColor,
      borderWidth: "2px",
      borderRadius: ".7rem",
    },
    "&:hover fieldset": {
      borderColor: focusColor,
    },
    "&.Mui-focused fieldset": {
      borderColor: focusColor,
    },
  },
});
const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  grid-template-areas:
    "."
    ".";
`;
const ContactArea = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-areas: ". .";
  @media (max-width: 480px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 1rem;
    grid-template-areas: "." ".";
  }
`;
const InputArea = styled(FormControl)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  gap: 1rem;
  grid-template-areas:
    "."
    "."
    ".";
  padding: 30px 0px 0px;
  @media (max-width: 670px) {
    padding: 20px 0px 0px;
  }
  @media (max-width: 400px) {
    margin-bottom: 2rem;
  }
`;
const BottomBar = styled(Divider)``;

const TitleArea = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  grid-template-areas:
    "."
    ".";
  justify-content: start;
  justify-items: start;
  margin-top: -2rem;
  @media (max-width: 670px) {
    margin-top: 0rem;
  }
`;
const Title = styled(Typography)`
  font-weight: 600;
  color: nonFocusColor;
  letter-spacing: 1;
  line-height: 1.2;
  font-size: 3rem;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
  @media (max-width: 350px) {
    font-size: 2.7rem;
  }
`;
const TitleInfo = styled(Typography)`
  color: nonFocusColor;
  font-weight: 600;
  letter-spacing: 0.7px;
  @media (max-width: 350px) {
    letter-spacing: 0.7px;
    letter-spacing: 0.32px;
    font-size: 1rem;
  }
  margin-left: 0.2rem;
`;

const EnrollButton = styled(Button)`
  text-transform: capitalize;
  margin-left: auto;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 9px;
  border: 3px solid #0070f3;
  color: #0a132f;
  padding: 0.2rem 1rem;
  &:hover {
    border: 3px solid #0070f3;
    background: #0070f3;
    color: #0a132f;
  }
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 30px;
  &.Mui-disabled {
    background: #969fa3;
    border: 3px solid #969fa3;
  }
`;
