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
import UnstyledPaginationIntroduction from "../../components/widget/Table";
import TableCustomized from "../../components/widget/Table";

import { useEffect, useState } from "react";
import axios from "axios";
import ModalAddProduct from "../../components/widget/managment/productManagement/ModalAddProduct";

export default function ProductsManagment() {
  const StyledTagOrginal = styled(Box)(({ them }) => ({
    backgroundColor: "#15171c",
    color: "#808290",
    margin: "20px",
    borderRadius: "4px",
  }));

const [list, setList] = useState([]);
const indexProductsHandle = async () => {
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
      "https://maloskshop.ir/public/api/v1/dashboard/administrator/products/index",
      {
        text: "",
        page: "1",
        per_page: "2",
      },
      config
    );
    setList(response);
    console.log("Index product", response);
  } catch (error) {
    console.log(error, "error");
  }
};

useEffect(() => {
  indexProductsHandle();
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
          <Buttoni />
          <Buttoni />
          <ModalAddProduct/>
        </Box>
        <SearchInputv />
      </Box>

      <Box>
        {/* <TableUsers /> */}
        <TableCustomized />
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

const VisuallyHiddenInput = styled("input")({
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

const Buttoni = () => {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{
        marginInline: "4px",
        paddingBlock: "11px",
        background: "#172331",
        color: "#006ae6",
      }}
    >
      Upload file 
      <VisuallyHiddenInput type="file" />
    </Button>
  );
};
