import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./common/NoFile";
import Moodboard from "./moodboard";
import Login from "./login/login";
import Otp from "./login/otp";
import Home from "./components/home";
import Project from './components/project';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {    
    primary: {
      main: "#273c75"
    },
    secondary: {
      main: green[500],
    },
  },
});

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/moodboard" element={<Moodboard />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}
