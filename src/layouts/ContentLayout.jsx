import { Box, Stack,styled } from "@mui/material";
import React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Outlet } from "react-router-dom";
import Sidebar from "../components/partials/Sidebar";

function ContentLayout({ children, tab }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    // const [tab, setTab] = useState(0);

  const StyledBox = styled(Box)(({ theme }) => ({
    // display: "flex",
    // justifyContent: "space-between",
    // backgroundColor: "blue",
    // width: "85%",
    // [theme.breakpoints.between("sm", "md")]: {
    //   backgroundColor: "black",
    // },
  }));

  return (
    //  <Box sx={{ display: "flex", bgcolor: "black" }}>
    //   <Box
    //     sx={{
    //       // backgroundColor: "blue",
    //       width: "85%",
    //       // display: "flex",
    //       // justifyContent: "",
    //     }}
    //   >
    <Stack>
      <Stack sx={{ width: "100%" }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              color: "#727481",
              background: "#0f1014",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRight: "2px solid #60626d",
                  paddingInline: "10px",
                  marginInline: "10px",
                  // bgcolor: "red",
                  // paddingBlock: "-10px",
                  height: "30px",
                }}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, gap: "20px" }}
                >
                  {/* <MenuIcon /> */}
                  <SystemUpdateAltIcon />
                  <ModeNightIcon />
                  {/* <LightModeIcon/> */}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  : ابزار
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                      sx={{ height: "30px", bgcolor: "#60626d" }}
                    >
                      <MenuItem value={10}>آخرین</MenuItem>
                      <MenuItem value={20}>آنلاین</MenuItem>
                      <MenuItem value={30}>آفلاین</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, marginLeft: 2 }}
                >
                  : ترتیب
                </Typography>
              </Box>
            </Box>

            <Box color="inherit">
              <Typography variant="h4">
                {tab === 1
                  ? "احراز هویت"
                  : tab === 2
                  ? "پیشخوان"
                  : tab === 3
                  ? "کاربران"
                  : tab === 4
                  ? "کالا ها"
                  : tab === 5
                  ? "دیدگاه ها"
                  : tab === 6
                  ? "مقالات"
                  : null}
              </Typography>
              <Box sx={{ display: "flex" }}>
                {/* <Typography color={"#fff"}> داشبورد - </Typography> */}
                {/* <Typography> صفحه اول </Typography> */}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Stack>
      <Stack sx={{ background: "#0f1014" }}>{children}</Stack>
      </Stack>
    
  );
}

export default ContentLayout;
