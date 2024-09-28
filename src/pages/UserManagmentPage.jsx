import { Box, Typography, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UnstyledPaginationIntroduction from "../components/widget/Table";
import TableCustomized from "../components/widget/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { ModalAddUser } from "../components/widget/ModalAddUser";
import { getAllUserApi } from "../services/allUserServices";

export function UserManagment() {
  const StyledTagOrginal = styled(Box)(({ them }) => ({
    backgroundColor: "#15171c",
    color: "#808290",
    margin: "20px",
    borderRadius: "4px",
  }));

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const indexUsersHandle = async () => {
    setLoading(true)
    const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // const bodyParameters = {
    //   key: "value",
    // };

    try {
      const response = await axios.post(
        "https://maloskshop.ir/public/api/v1/dashboard/administrator/users/index",
        {
          text: "",
          page: "1",
          per_page: "6",
        },
        config
      );
      setLoading(false)
      setList(response.data.data.users);
      console.log("Index user", response.data.data.users);
    } catch (error) {
      console.log(error, "error");
    }
  };


  useEffect(() => {
    indexUsersHandle();
    // getAllUserApi(data);
  }, []);

  

  return (
    <StyledTagOrginal sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Box>
          <ModalAddUser />
        </Box>
        <SearchInputv />
      </Box>

      <Box>
        {/* <TableUsers /> */}
        <TableCustomized list={list} loading={loading} />
      </Box>
    </StyledTagOrginal>
  );
}

const SearchInputv = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        // m: 2,
        bgcolor: "#1b1c22",
      }}
    >
      <IconButton
        type="button"
        sx={{ p: "10px", color: "#60626d" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>

      <InputBase
        sx={{ mr: 1, flex: 1, direction: "rtl", color: "#60626d" }}
        placeholder="جستار کنید ..."
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});


