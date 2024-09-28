import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../../components/partials/Sidebar";
import ContentLayout from "../../layouts/ContentLayout";
import { Outlet } from "react-router-dom";
// import { Outlet } from "@mui/icons-material";
// import Auth from "../Auth/Register";
// import Dashboard from "../Dashboard";
// import UserManagment from "../UserManagment";
// import ProductsManagment from "../ProductsManagment";
// import ArticlesManagment from "../ArticlesManagment";
// import CommentsManagment from "../CommentsManagment";

export default function Home() {
  const [tab, setTab] = useState(0);

  // const styles = (theme) => ({
  //   root: {
  //     backgroundColor: "blue",
  //     // Match [sm, md)
  //     //       [600px, 900px)
  //     [theme.breakpoints.between("sm", "md")]: {
  //       backgroundColor: "red",
  //     },
  //   },
  // });
  
  // Create a styled component with dynamic styles
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
    <Box sx={{ display: "flex", bgcolor: "black" }}>
      <Box
        sx={{
          backgroundColor: "blue",
          width: "100%",
          marginRight: "20%",
        }}
      >
        {/* CONTENT LAYOUT */}
        <ContentLayout tab={tab}>
          <Outlet /> 
        </ContentLayout>
      </Box>
      <Box>
        <StyledBox sx={{ width: "300px", position: "fixed", right: "0px" }}>
          <Sidebar tab={tab} setTab={setTab} />
        </StyledBox>
      </Box>
    </Box>
  );
}
