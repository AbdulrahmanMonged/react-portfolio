import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ResponsiveAppBar from "./ResponsiveAppBar";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import "./styles/Contact.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function Contact() {
  const initData = {
    name: "",
    email: "",
    text: "",
  };

  const [data, setData] = React.useState(initData);

  const handleChange = (e) => {
    setData((oldData) => ({ ...oldData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${data.name}, Email: ${data.email}, Text: ${data.text}`);
  };

  const resetBtn = () => {
    setData(initData);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#31363F",
        color: "#fff",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <ResponsiveAppBar />
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ display: "flex", height: "92.1vh", width: "90vw" }}>
          <Box
            sx={{
              flexGrow: 1,
              width: "25vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={4} sx={{ width: 300 }}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Name
                  </InputLabel>
                  <Input
                    type="text"
                    name="name"
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                    value={data.name}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Email
                  </InputLabel>
                  <Input
                    name="email"
                    type="email"
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    }
                    value={data.email}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <TextField
                    name="text"
                    id="standard-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    value={data.text}
                    variant="standard"
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="standard">
                  <Button variant="contained" type="submit" endIcon={<SendIcon />} sx={{ borderRadius: 15 }}>
                    Submit
                  </Button>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="standard">
                  <Button
                  endIcon={<RestartAltIcon/>}
                    variant="contained"
                    color="error"
                    onClick={resetBtn}
                    sx={{ borderRadius: 15 }}
                  >
                    Reset
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
}
