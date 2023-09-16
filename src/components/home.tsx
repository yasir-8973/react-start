import React from "react";
import {
  Grid,
  IconButton,
  Button,
  AppBar,
  Typography,
  Toolbar,
  Paper,
  InputBase,
  Box,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import projectData from '../dummy/project.json';
import HeaderButtons from "../common/headerButtons";

export function Header() {
  return (
    <Box sx={{ height: "8vh" }}>
      <AppBar position="fixed" sx={{ height: "8vh" }}>
        <Toolbar sx={{ minHeight: "8vh !important" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/home'}>
            Clutch
            </Link>
          </Typography>
          <HeaderButtons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Grid sx={{ flexGrow: 1, padding: "3% 7%", width: "100%" }} container>
        <Grid item xs={9} sm={10} md={11}>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              width: "98%",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <Button variant="contained" size="large" fullWidth>
            Add
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "2%" }}>
          <Grid container spacing={0.5}>
            {projectData.project.map((e) => (<Grid item xs={6} md={3} sm={4}>
              <Link to={{
                pathname: "/project",
                search: `?id=${e.id}`,
              }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {e.Name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Rooms - {e.Rooms}
                  </Typography>
                  <Typography variant="body2">
                    {e.Description}.
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
