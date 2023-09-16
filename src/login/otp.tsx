import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./login.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";

export default function Otp() {
  let navigate = useNavigate();
  const [OTP, setOTP] = React.useState<string>("");

  const Redirect = () => {
    if (OTP == "000000") {
      navigate("/home");
    }
  };
  const renderButton = (buttonProps: any) => {
    return (
      <Button variant="contained" size="small" {...buttonProps}>
        Resend
      </Button>
    );
  };
  return (
    <Paper
      sx={{
        p: 2,
        margin: "5% auto",
        maxWidth: 500,
        height: "75%",
        flexGrow: 1,
        backgroundColor: "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container direction="column" spacing={2}>
          <Grid item xs>
            <Typography variant="h4" component="div">
              Please enter the OTP
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={9} sx={{ marginTop: "8px" }}>
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
            />
            <br />
            <ResendOTP
              renderButton={renderButton}
              className="resend-otp"
              onResendClick={() => console.log("Resend clicked")}
            />
          </Grid>
          <Grid item xs={9} sx={{ marginTop: "8px" }}>
            <Button
              disabled={OTP.length < 6 ? true : false}
              variant="contained"
              fullWidth
              size="large"
              onClick={Redirect}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
