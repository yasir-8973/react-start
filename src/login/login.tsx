import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./login.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, TextField } from "@mui/material";
import { PhoneNumber } from "../common/validation";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
  const [showSignUp, setShowSignUp] = React.useState<Boolean>(false);
  const [phoneNumber,setPhoneNumer] = React.useState<string>("");

  const Redirect = () => {
    navigate('/otp');
  }
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
              {showSignUp ? "Create Account" : "Login"}
            </Typography>
            <Typography variant="body2">
              or{" "}
              <Button
                className="custom-link"
                onClick={() => {
                  setShowSignUp((e) => !e);
                }}
                variant="text"
                sx={{ textTransform: "lowercase" }}
              >
                {(showSignUp ? "login to your" : "create") + " an account"}
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {showSignUp ? (
            <>
              <Grid item xs={9} sx={{ margin: '8px 0' }}>
                <TextField className="mb-5"
                  fullWidth
                  label="Name"
                  variant="outlined" 
                />
                <TextField className="mb-5"
                  fullWidth 
                  label="Email"
                  variant="outlined"
                />
                <TextField className="mb-5"
                  fullWidth 
                  label="State"
                  variant="outlined"
                />
                <TextField className="mb-5"
                  fullWidth 
                  label="Organization"
                  variant="outlined"
                />
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Are you?</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                    <FormControlLabel value="interiorDesigner" control={<Radio />} label="Interior Designer" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </>
          ) : (
            <Grid item xs={9} sx={{ marginTop: "8px" }}>
              <TextField
                fullWidth //value={phoneNumber} 
                onChange={(e: any) => {console.log(PhoneNumber(e.target.value))}}
                label="Phone Number"
                variant="outlined"
              />
            </Grid>
          )}
          <Grid item xs={9} sx={{ marginTop: "8px" }}>
            <Button variant="contained" fullWidth size="large" onClick={Redirect}>
              {showSignUp? "Create" : "Login"}
            </Button>
          </Grid>
          <Grid item xs={9} sx={{ marginTop: "8px" }}>
            <Typography gutterBottom component="div" sx={{ fontSize: "13px" }}>
              By clicking on {showSignUp? "Create" : "Login"}, I accept the Terms & Conditions & Privacy
              Policy
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
