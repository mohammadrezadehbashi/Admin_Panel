import React, { useEffect, useState } from "react";
import { Stack, Box, Typography, TextField, styled, Card } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";
import { useFormik } from "formik";
import { loginApi } from "../../services/authServices";

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
   // background:"red"
 });

const Heading = () => {};

const Form = () => {
  const navigate = useNavigate();



  const [captchaImageUrl, setCaptchaImageUrl] = useState("");
  // const [Xx, setX] = useState();
  const [imageUrl, setImageUrl] = useState();

  // useEffect(() => {
  //   const fetchCaptchaData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://maloskshop.ir/public/api/v1/getCaptcha/5"
  //       );
  //       const base64Image = Buffer.from(response.data).toString("base64");
  //       console.log("REEEES", response);
  //       setX(response.data);
  //       // setCaptchaImageUrl(`data:image/png;base64,${base64Image}`);
  //       setCaptchaImageUrl(base64Image);
  //     } catch (error) {
  //       console.error("Error fetching captcha data:", error);
  //     }
  //   };

  //   fetchCaptchaData();
  // }, []);

  // const handleCaptchaChange = (value) => {
  //   console.log("Captcha value:", value);
  // };

  const dataImage = `data:image/png;base64,${captchaImageUrl}`;

  function dataUrlToFile(dataUrl, filename) {
    const base64Data = dataImage.split(",")[1];
    const bineryData = atob(base64Data);
    const arrayBuffer = new ArrayBuffer(bineryData.length);
    const unit8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < bineryData.length; i++) {
      unit8Array[i] = bineryData.charCodeAt(i);
    }

    const blob = new Blob([unit8Array], { type: "image/png" });
    const file = new File([blob], filename, { type: "image/png" });
    const url = URL.createObjectURL(file);

    setImageUrl(url);

    return file;
  }

  useEffect(() => {
    dataUrlToFile(dataImage, "1");

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, []);

  // login
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      // captcha: "",
    },
    // validationSchema:,
    onSubmit: async (data) => {
      const response = await loginApi(data);

      if (response.message === "با موفقیت وارد شدید") {
        navigate("/dashboard/user_manage");
      } else {
        console.log(response.message);
      }
    },
  });


 
  return (
    <Stack
      sx={{ marginInline: "15%", height: "100vh" }}
      alignItems={"center"}
      gap={1}
      // margin={"20px"}
      // justifyContent={"center"}
    >
      <Box sx={{ marginTop: "60px" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "700", textAlign: "center", marginBottom: 1 }}
          color={"white"}
        >
          ورود
        </Typography>
        <Typography
          // variant="p"
          sx={{ display: "flex", justifyContent: "center" }}
          color={"gray"}
        >
          Your Social Campaigns
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "15px" }}>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={
            // <CloudUploadIcon />
            <img width={20} src={"./icons8-google-94.png"} />
          }
          sx={{
            background: "transparent",
            color: "#848595",
            border: ".1px solid",
          }}
        >
          Sign in with Google
          <VisuallyHiddenInput type="file" />
        </Button>

        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={
            // <CloudUploadIcon />
            <img width={20} src={"./icons8-apple-16.png"} />
          }
          sx={{
            background: "transparent",
            color: "#848595",
            border: ".1px solid",
          }}
        >
          Sign in with Apple
          <VisuallyHiddenInput type="file" />
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          height: "40px",
          width: "600px",
          "@media (max-width:600px)": {
            width: "400px",
          },
          "@media (max-width:400px)": {
            width: "150px",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "17%",
            borderBottom: ".1px solid gray",
            width: "400px",
            height: "20px",
            "@media (max-width:600px)": {
              left: "0%",
            },
            "@media (max-width:400px)": {
              backgroundColor: "blue",
              width: "0px",
              position: "unset",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "37%",
              top: "22%",
              paddingBlock: "5px",
              paddingInline: "15px",
              bgcolor: "#0f1014",
              "@media (max-width:400px)": {
                position: "unset",
                // width: "100px",
                width: "140px",
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Typography color={"#fff"}>Or with email</Typography>
          </Box>
        </Box>
      </Box>

      <Stack
        dir="rtl"
        color={"white"}
        gap={"1px"}
        width={"100%"}
        // bgcolor={"red"}
      >
        <Stack
          direction="column"
          spacing={1}
          justifyContent="start"
          alignItems="start"
          width="100%"
        >
          <Typography variant="body1">user name :</Typography>
          <TextField
            value="outlined"
            size="small"
            fullWidth
            name="username"
            autoComplete="off"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </Stack>

        <Stack
          direction="column"
          spacing={1}
          justifyContent="start"
          alignItems="start"
          width="100%"
        >
          <Typography variant="body1">password :</Typography>
          <TextField
            value="outlined"
            size="small"
            fullWidth
            name="password"
            autoComplete="new-password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Stack>

        {/* <ReCAPTCHA sitekey={captchaImageUrl} onChange={handleCaptchaChange} /> */}
        {captchaImageUrl && (
          <img
            style={{ width: "20px", height: "20px" }}
            src={captchaImageUrl}
            alt="Captcha Image"
          />
        )}

        {imageUrl && (
          <img src={imageUrl} width={100} height={100} alt="Captcha Image" />
        )}
        <img
          src={
            "data:image/png;base64,77+9UE5HDQoaCgAAAA1JSERSAAAAIwAAAA0BAwAAABnvv71FXAAAAANQTFRF77+977+977+977+977+9G++/vQAAAAlwSFlzAAAO77+9AAAO77+9Ae+/vSsOGwAAAAxJREFUCO+/vWNg77+9JgAAAE4AAe+/vXoa77+9AAAAAElFTkTvv71CYO+/vTE="
          }
          width={100}
          height={100}
          alt="Captcha Image"
        />

        <Link>
          {" "}
          <Typography sx={{ color: "#054a9c" }}>
            گذرواژه را فراموش کردید ؟
          </Typography>
        </Link>

        <Button
          variant="contained"
          sx={{ background: "#054a9c", color: "#fff", marginTop: "19px" }}
          // onClick={loginApi}
          onClick={formik.handleSubmit}
        >
          ادامه
        </Button>
        {/* <Button
          variant="contained"
          sx={{ background: "#172331", color: "#549acb" }}
        >
          رد
        </Button> */}
        <Box
          sx={{
            display: "flex",
            color: "#4f515d",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Typography>
            هنوز عضو نشدید ؟
            <Link to={"./register"}>
              <Typography
                variant="a"
                sx={{ color: "#054a9c", marginRight: "4px" }}
              >
                ثبت نام
              </Typography>
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            color: "#054a9c",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link to={"#"}>
            <Typography sx={{ color: "#054a9c" }}>Terms</Typography>
          </Link>
          <Link to={"#"}>
            <Typography sx={{ color: "#054a9c", marginInline: "25px" }}>
              Plans
            </Typography>
          </Link>
          <Link to={"#"}>
            <Typography sx={{ color: "#054a9c" }}>Contact Us</Typography>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export function Content() {
  //   const LeftSide = () => {

  return (
    <Card>
      <Stack>
        <Heading />
        <Form />
      </Stack>
    </Card>
  );
  //   };
}
