import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Box, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { BorderBottom } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import Category from "@mui/icons-material/Category";
import CommentIcon from "@mui/icons-material/Comment";
import AssignmentIcon from "@mui/icons-material/Assignment";

// import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
// import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import Typography from '@mui/material/Typography';
import SettingsIcon from "@mui/icons-material/Settings";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

export default function Sidebar({ tab, setTab }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Stack
      //   spacing={{ xs: 1, sm: 2 }}
      //   direction="row"
      //   useFlexGap
      //   flexWrap="wrap"
      sx={{
        background: "#0d0e12",
        height: "100vh",
        border: "2px solid #23252c",
      }}
      dir="rtl"
    >
      <Stack
        direction="row"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          borderBottom: "1px solid #71758b",
          // borderColor: "#71758b",
          minHeight: "65px",
          height: "115px",
          padding: "8px",
        }}
      >
        <Box component={"p"} var>
          <Typography variant="h4" color={"white"}>
            CMS
          </Typography>
        </Box>
        <Box>
          <Link to={"/"}>
            <ExitToAppIcon sx={{ color: "white" }} />
          </Link>
        </Box>
      </Stack>

      <Stack sx={{ borderBottom: "1px solid #71758b" }}>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
          // secondaryAction={
          //   // <Checkbox

          //   // onChange={handleToggle(value)}
          //   // checked={checked.indexOf(value) !== -1}/
          //   // inputProps={{ 'aria-labelledby': labelId }}
          //   //  />
          //   <SettingsIcon edge="end" sx={{ color: "#77819c" }} />
          // }
        >
          {/* <Box sx={{ background: "red" }}> */}
          {/* <SettingsIcon sx={{ color: "#77819c" }} /> */}
          {/* </Box> */}
          <ListItemAvatar sx={{ alignSelf: "center" }}>
            <Avatar
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "4px",
                marginRight: "20px",
              }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Alvena Ward"
            sx={{ color: "#fff" }}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="#77819c"
                >
                  python Dev
                </Typography>
                <Typography color={"green"}>.online</Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        {/* <Divider variant="inset" component="li" /> */}
        <Divider variant="inset" component="li" />
      </Stack>

      <Stack sx={{ borderBottom: "1px solid #71758b" }}>
        <FormControl
          sx={{
            m: 1,
            width: "25ch",
            bgcolor: "#2c2c41",
            color: "white",
            borderRadius: "9px",
          }}
          variant="outlined"
        >
          <InputLabel
            sx={{ color: "#71758b", textAlign: "right" }}
            htmlFor="outlined-adornment-password"
            dir="rtl"
          >
            جست و جو ...
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            // type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  // edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Stack>

      <Stack dir="rtl">
        <Link to={"/dashboard"}>
          <ListItemButton sx={{ color: "#898c98" }}>
            <ListItemIcon>
              <SendIcon sx={{ color: "#1f202c" }} />
            </ListItemIcon>
            <ListItemText
              primary="داشبورد"
              Align="right"
              sx={{ fontVariant: 5, fontSize: 600 }}
            />
          </ListItemButton>
        </Link>

        {/* <ListItemButton sx={{ color: "#898c98" }}>
          <ListItemIcon>
            <SendIcon sx={{ color: "#1f202c" }} />
          </ListItemIcon>
          <ListItemText primary="لایه" Align="right" />
        </ListItemButton> */}
      </Stack>

      <Stack
        dir="rtl"
        sx={{
          borderBottom: "1px solid #71758b",
          overflowY: "auto",
        }}
      >
        <List
          sx={{ width: "100%", color: "#9a9daa" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ bgcolor: "#0d0e12", color: "#888a97" }}
            >
              مدیریت
            </ListSubheader>
          }
        >
          <Link to={"user_manage"}>
            <ListItemButton onClick={() => setTab(3)}>
              <ListItemIcon>
                <GroupIcon sx={{ color: "#1f202c" }} />
              </ListItemIcon>
              <ListItemText
                primary="مدیریت کاربران"
                sx={{
                  color: "#fff",
                  textAlign: "right",
                }}
              />
            </ListItemButton>
          </Link>

          <Link to={"product_manage"} sx={{ textDecoration: "none" }}>
            <ListItemButton onClick={() => setTab(4)}>
              <ListItemIcon>
                <Category sx={{ color: "#1f202c" }} />
              </ListItemIcon>
              <ListItemText
                primary="مدیریت محصولات"
                sx={{ color: "#fff", textAlign: "right" }}
              />
            </ListItemButton>
          </Link>

          <Link
            // to={"comment_manage"}
            disabled
          >
            <ListItemButton
              // onClick={() => setTab(5)}
              disabled
            >
              <ListItemIcon>
                <CommentIcon sx={{ color: "#1f202c" }} />
              </ListItemIcon>
              <ListItemText
                primary="مدیریت دیدگاه ها"
                sx={{ color: "#fff", textAlign: "right" }}
              />
            </ListItemButton>
          </Link>

          <Link
            // to={"article_manage"}
            disabled
          >
            <ListItemButton onClick={() => setTab(6)} disabled>
              <ListItemIcon>
                <AssignmentIcon sx={{ color: "#1f202c" }} />
              </ListItemIcon>
              <ListItemText
                primary="مدیریت مقالات"
                sx={{ color: "#fff", textAlign: "right" }}
              />
            </ListItemButton>
          </Link>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon sx={{ color: "#1f202c" }} />
            </ListItemIcon>
            <ListItemText primary="کرسی ها " Align="right" />
            {open ? (
              <ExpandLess sx={{ color: "#1f202c" }} />
            ) : (
              <ExpandMore sx={{ color: "#1f202c" }} />
            )}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disabled>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  {/* <StarBorder sx={{ color: "#1f202c" }} /> */}
                  <Box
                    sx={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "5px",
                      bgcolor: "#1f202c",
                    }}
                  ></Box>
                </ListItemIcon>
                <ListItemText primary="اعضا" Align="right" />
              </ListItemButton>
            </List>

            <List component="div" disablePadding disabled>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  {/* <StarBorder sx={{ color: "#1f202c" }} /> */}
                  <Box
                    sx={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "5px",
                      bgcolor: "#1f202c",
                    }}
                  ></Box>
                </ListItemIcon>
                <ListItemText primary="محصولات" Align="right" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <List
          sx={{ width: "100%" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ bgcolor: "#0d0e12", color: "#888a97" }}
            >
              برنامک
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon Align="right">
              <SendIcon sx={{ color: "#1f202c" }} />
            </ListItemIcon>
            <ListItemText
              primary="گپ"
              sx={{ color: "#888a97", textAlign: "right" }}
            />
          </ListItemButton>
        </List>
      </Stack>

      <Stack sx={{ color: "white" }}>
        <ListItemButton>
          {/* <ListItemIcon Align="right">
            <SendIcon sx={{ color: "#1f202c" }} />
          </ListItemIcon> */}
          <ListItemText primary="v8.2.3 نسخه" Align="right" />
        </ListItemButton>
      </Stack>

      <Stack sx={{ color: "white", bgcolor: "#2c2c41" }}>
        <ListItemButton>
          <ListItemIcon>
            {/* <SendIcon sx={{ color: "white" }} /> */}
          </ListItemIcon>
          <ListItemText primary="Docs & Components" />
        </ListItemButton>
      </Stack>

      {/* <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Long content</Item> */}
    </Stack>
  );
}
