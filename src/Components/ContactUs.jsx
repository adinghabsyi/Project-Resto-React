import { createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import { Phone } from "@mui/icons-material";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";

const theme = createTheme({
  palette: {
    primary: {
      white: "#E1D9D9",
      main: "#A33B00",
      dark: "#1e1e1e",
      contrastText: "#2A2927",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
export default function ContactUs() {
  function message() {
    var name = document.getElementById("name-input");
    var email = document.getElementById("email-input");
    var phone = document.getElementById("phone-input");
    var message = document.getElementById("msg-input");

    const success = document.getElementById("success");
    const error = document.getElementById("error");

    if (
      name.value == "" ||
      email.value == "" ||
      phone.value == "" ||
      message.value == ""
    ) {
      error.style.display = "block";
    } else {
      setTimeout(() => {
        name.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
      }, 2000);

      success.style.display = "block";
    }

    setTimeout(() => {
      error.style.display = "none";
      success.style.display = "none";
    }, 3000);
  }
  return (
    <div className="contact-form">
      <Stack alignItems="center">
        <PeopleAltSharpIcon
          sx={{
            fontSize: 40,
            color: theme.palette.primary.contrastText,
            marginBottom: 1,
          }}
        />
      </Stack>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          marginBottom: 3,
          color: theme.palette.primary.contrastText,
        }}
      >
        CONTACT US
      </Typography>
      <div className="row4">
        <form action="">
          <div className="input-form">
            <PersonRoundedIcon className="icon" />
            <input type="text" placeholder="Name" id="name-input" />
          </div>
          <div className="input-form">
            <AlternateEmailRoundedIcon className="icon" />
            <input type="text" placeholder="Email address" id="email-input" />
          </div>
          <div className="input-form">
            <Phone className="icon" />
            <input type="text" placeholder="Phone number" id="phone-input" />
          </div>
          <div className="input-form">
            <MessageSharpIcon className="icon" />
            <input type="text" placeholder="Message" id="msg-input" />
          </div>
          <button type="button" className="submit-button" onClick={message}>
            SUBMIT
          </button>
          <div className="message">
            <div id="success" className="success">
              Pesan berhasil dikirim
            </div>
            <div id="error" className="error">
              Harap mengisi form terlebih dahulu untuk mengirim!
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
