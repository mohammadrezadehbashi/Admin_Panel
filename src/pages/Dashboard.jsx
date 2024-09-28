import { Box, Stack, Typography, styled } from "@mui/material";
import opinionsvg from "../asset/svg/opinion-svgrepo-com.svg";

export default function Dashboad() {
  const StyledTagOrginal = styled(Box)(({ them }) => ({
    // backgroundColor: "#15171c",
    position: "fixed",
    backgroundColor: "#fff",
    color: "#808290",
    margin: "20px",
    borderRadius: "4px",
    height: "90vh",
    display: "flex",
    paddingInline:"30%",
    alignItems:"center"
  }));

  return (
    <StyledTagOrginal>
      <Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={opinionsvg} width={250} height={350} />
          <Typography sx={{ fontSize: "20px" }}>
            فعلا صفحه ای وجود ندارد
          </Typography>
        </Box>
      </Stack>
    </StyledTagOrginal>
  );
}
