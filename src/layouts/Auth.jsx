import { styled, Box } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  // justifyContent: "space-between",
  justifyContent: "center",
  alignItems:"center",
  // [theme.breakpoints.between("sm", "md")]: {
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
  },
  // "& .custom-content": {
  //   backgroundColor: "green",
  // },
}));

const StyleSide = styled(Box)(({ theme }) => ({
  width: "50%",
  background: "#0f1014",
  // background: theme.palette.secondary,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export default function Auth({ children }) {
  return (
    <StyledBox sx={{ bgcolor: "#0f1014" }}>
      {/* <StyleSide> */}
      {/* <LeftSide /> */}
      {children}
      {/* </StyleSide> */}

      {/* <StyleSide
        sx={{
          background: "#054a9c",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBlock: "7%",
            marginInline: "7%",
          }}
        >
          <img
            src="/assets/media/auth/chart-graph-dark.png"
            width={"100%"}
            height={"10%"}
          />
        </Box>
      </StyleSide> */}
    </StyledBox>
  );
}
