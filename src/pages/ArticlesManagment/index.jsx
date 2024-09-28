import { Box, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TableCustomized from "../../components/widget/Table";

export default function ArticlesManagment() {
  const StyledTagOrginal = styled(Box)(({ them }) => ({
    backgroundColor: "#15171c",
    color: "#808290",
    margin: "20px",
    borderRadius: "4px",
  }));

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
          <Buttoni />
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
