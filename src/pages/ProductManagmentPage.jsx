import { Box, Typography, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TableProducts from "../components/widget/TableProducts";

import { useEffect, useState } from "react";
import axios from "axios";
// import ModalAddProduct from "../../components/widget/ModalAddProduct";
import MoadaAddProduct from "../components/widget/ModalAddProduct";
import ModalUpdateProduct from "../components/widget/ModalUpdateProduct";

export default function ProductManagementPage() {
  const StyledTagOrginal = styled(Box)(({ them }) => ({
    backgroundColor: "#15171c",
    // backgroundColor: "#fff",
    color: "#808290",
    margin: "20px",
    borderRadius: "4px",
    minHeight: "86vh",
  }));

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const indexProductsHandle = async () => {
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
        "https://maloskshop.ir/public/api/v1/dashboard/administrator/products/index",
        {
          text: "",
          page: "1",
          per_page: "6",
        },
        config
      );
          setLoading(false);
      setList(response.data.data.products);
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
          {/* <Buttoni /> */}
          {/* <Buttoni /> */}
          <MoadaAddProduct />
        </Box>
        <SearchInputv />
      </Box>

      <Box>
        {/* <TableUsers /> */}
        <TableProducts list={list} loading={loading} />
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


