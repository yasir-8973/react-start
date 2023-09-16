import React from "react";
import { Header } from "./home";
import { Link, useSearchParams } from "react-router-dom";
import projectData from "../dummy/project.json";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { EditOutlined, LocalGroceryStoreOutlined } from "@mui/icons-material";

export default function Project() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("id");
  const data = projectData?.project?.filter((e: any) => e?.id == code)[0];

  return (
    <div className="home-container">
      <Header />
      <Grid
        className="heightAuto"
        sx={{ flexGrow: 1, padding: "50px", width: "100%" }}
        container
      >
        <Grid item xs className="height100">
          <Card variant="outlined" sx={{ height: "100%", bgcolor: "#f9f9f9" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                <Stack direction="row" spacing={2}>
                  <p className="flex1 m0">{data.Name}</p>
                  <Chip
                    icon={<MeetingRoomIcon />}
                    label={"Rooms - " + data.Rooms}
                    variant="outlined"
                  />
                </Stack>
              </Typography>
              <Typography variant="body2" gutterBottom>
                {data.Description}.
              </Typography>
              <br />
              <Divider />
            </CardContent>
            <Grid
              sx={{ margin: 0,width: '100%' }}
              spacing={2}
              container
            >
              <Grid item xs={12} sm={6} md={6} sx={{padding: '10px 20px !important'}}>
                <Link
                  to={{
                    pathname: "/moodboard",
                    search: `?id=${data.id}`,
                  }}
                >
                  <Paper
                    sx={{                      
                      minHeight: "136px",
                      bgcolor: "#f9f9f9",
                    }}
                  >
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#130f40" }}>
                            <DashboardIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          className="textOverflow"
                          primary="Moodboard"
                          secondary="Create flow chart with Moodboard"
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={6} sx={{padding: '10px 20px !important'}}>
                <Paper
                  sx={{                    
                    minHeight: "136px",             
                    bgcolor: "#f9f9f9",
                  }}
                >
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "#38ada9" }}>
                          <ShoppingCartIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        className="textOverflow"
                        primary="Sourcing / Procurement"
                        secondary="Market Place  | Customize Items "
                      />
                    </ListItem>
                    <ListItem>
                      <Stack
                        direction={{
                          xs: "column",
                          sm: "column",
                          md: "row",
                          lg: "row",
                        }}
                        spacing={1}
                      >
                        <Link to={"/marketplace"}>
                          <Chip
                            className="flex1 mr10 ml10 pr10 pl10 cp"
                            size="small"
                            color="primary"
                            icon={<LocalGroceryStoreOutlined />}
                            label={"Market Place"}
                            variant="outlined"
                          />
                        </Link>
                        <Link to={"/customize"}>
                          <Chip
                            className="flex1 mr10 ml10 pr10 pl10 cp"
                            size="small"
                            color="secondary"
                            icon={<EditOutlined />}
                            label={"Customization"}
                            variant="outlined"
                          />
                        </Link>
                      </Stack>
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
