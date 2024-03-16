import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/About.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const languages = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "C++",
    value: 70,
  },
  {
    name: "JavaScript",
    value: 70,
  },
  {
    name: "HTML",
    value: 95,
  },
  {
    name: "CSS",
    value: 65,
  },
];

const abilities = [
  {
    name: "Back-end Developer",
    describition:
      "Building awesome Back-end gate for your website using Flask and Async version of Flask (Quart)",
  },
  {
    name: "Front-end Developer",
    describition:
      "Ability to code your front-end of your website using Pure HTML, CSS, JS and React.js as main framework!",
  },
  {
    name: "Web Scraping",
    describition:
      "Fetching information from Some websites if they allow developers from fetching data from their sites.",
  },
  {
    name: "Databases",
    describition: "Ability to use PostgreSQL, SQLite, MongoDB",
  },
  {
    name: "Automation",
    describition: "Finish Your jobs by letting code do it on behalf of you!",
  },
];

export default function About() {
  const [value, setValue] = React.useState(0);
  const [dense, setDense] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mainContent">
      <CssBaseline />
      <ResponsiveAppBar />
      <div className="content">
        <ThemeProvider theme={darkTheme}>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: 700,
              maxWidth: "100%",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="fullWidth"
              textColor="secondary"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="Programming Languages" {...a11yProps(0)} wrapped />
              <Tab label="Journey" {...a11yProps(1)} wrapped />
              <Tab label="Brief Talk about me" {...a11yProps(2)} wrapped />
            </Tabs>
            <TabPanel value={value} index={0} sx={{ position: "relative" }}>
              <Typography component={"h1"}>
                Programming Langauges i've learnt so far
              </Typography>
              <Box sx={{ position: "absolute", left: 350 }}>
                {languages.map((newitem, i) => {
                  return (
                    <Grid key={i} container spacing={2}>
                      <Grid item mb={5}>
                        <Grid container spacing={2}>
                          <Grid item sx={{ position: "relative" }}>
                            <Typography
                              component={"span"}
                              sx={{
                                textAlign: "center",
                                position: "absolute",
                                right: 10,
                                top: 10,
                              }}
                            >
                              {newitem.name}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <BorderLinearProgress
                              variant="determinate"
                              color="secondary"
                              value={newitem.value}
                              sx={{ width: 300 }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignContent={"center"}
                justifyContent={"center"}
                sx={{
                  maxHeight: "40em",
                  overflow: "auto",
                  width: "100vw",
                  textAlign: "center",
                }}
              >
                {abilities.map((ability, i) => {
                  return (
                    <List dense={dense}>
                      <ListItem>
                        <ListItemText
                          primary={ability.name}
                          secondary={ability.describition}
                        />
                      </ListItem>
                    </List>
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Box sx={{ maxHeight: "40em", margin: 0, overflow: "auto", width: "100vw", display: "flex" }}>
                <Typography sx={{ lineHeight: 1.5, spacing: 1.5, width: "50%",  }}><Typography>Hey there! 👋 I'm Bodyy, a passionate software engineer with a love for crafting innovative solutions as a Back-End developer. With a versatile skill set and a keen eye for detail, I thrive on turning complex problems into elegant, efficient code.

                </Typography>My journey in the realm of technology has led me to master several languages, including Python, C++, JavaScript, HTML, and CSS. Whether I'm diving into the backend infrastructure or fine-tuning the user experience, I bring a blend of creativity and technical prowess to every project.

                <Typography>One of my favorite pastimes is unleashing the power of automation and web scraping to streamline processes and gather valuable insights. From automating repetitive tasks to extracting data from the depths of the internet, I revel in the challenge of harnessing technology to make life easier.

                </Typography>When I'm not immersed in lines of code, you can find me exploring the latest developments in the tech world, experimenting with new frameworks and tools, or diving into a stimulating book on software architecture.

                <Typography>Driven by curiosity and fueled by a passion for innovation, I'm always ready to tackle the next big challenge and push the boundaries of what's possible in the digital landscape.

                </Typography>Let's connect and embark on a journey to revolutionize the way we interact with technology! 🚀</Typography>
              </Box>
            </TabPanel>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
