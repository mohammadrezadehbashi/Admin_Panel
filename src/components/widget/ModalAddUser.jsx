import { useState } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

// import { VisuallyHiddenInput } from "../../pages/UserManagmentPage";
import { Card, Stack } from "@mui/material";
import { useFormik } from "formik";
import FileInput from "../modules/FileInput";
import { addUserApi } from "../../services/allUserServices";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Heading = () => {};

function Form() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: "",
      mobile: "",
      address: "",
      role_id: "",
      profile: null,
    },
    // validationSchema:,
    onSubmit: async (res) => {
      console.log("res,", res);
      const response = await addUserApi(res);

      if (response.error === false) {
        console.log("trrrrrrrrrue");
      } else {
        console.log(response.error);
      }
    },
  });

  const addUserHandle = async () => {
    const token = "27|gd4zDuYLMOpbmGPxnfardsaTfIU1zaiTHX8AcvJUf187c4da";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
          

      const response = Axios.post(
        "https://maloskshop.ir/public/api/v1/dashboard/administrator/users/create",
        {
          first_name: "hadi",
          last_name: "alavi",
          username: "hadi123",
          password: "123456",
          email: "had@gmail.com",
          mobile: "0930902302",
          address: "kish",
          role_id: "3",
          profile: null,
        },
        config
      );
      console.log("addUser", response);
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <>
      <ButtonAddUser handleOpen={handleOpen} />
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              افزودن کاربر
            </Typography>

            <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="first_name">First Name</InputLabel>
              <Input
                id="first_name"
                name="first_name"
                // id="component-error"
                // defaultValue="Composed TextField"
                // aria-describedby="component-error-text"
                value={formik.values.first_name}
                onChange={formik.handleChange}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="last_name">Last Name</InputLabel>
              <Input
                id="last_name"
                name="last_name"
                // id="component-error"
                // defaultValue="Composed TextField"
                // aria-describedby="component-error-text"
                value={formik.values.last_name}
                onChange={formik.handleChange}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                id="username"
                name="username"
                // id="component-error"
                // defaultValue="Composed TextField"
                // aria-describedby="component-error-text"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                name="password"
                // id="component-error"
                // defaultValue="Composed TextField"
                // aria-describedby="component-error-text"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                name="email"
                // id="component-error"
                // defaultValue="Composed TextField"
                // aria-describedby="component-error-text"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="mobile">Mobile</InputLabel>
              <Input
                id="mobile"
                name="mobile"
                // id="component-error"
                // defaultValue="Composed TextField"
                // aria-describedby="component-error-text"
                value={formik.values.mobile}
                onChange={formik.handleChange}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="address">Address</InputLabel>
              <Input
                id="address"
                name="address"
                // id="component-error"
                // defaultValue="Composed TextField"
                // aria-describedby="component-error-text"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="role_id">Role</InputLabel>
              <Input
                id="role_id"
                name="role_id"
                // id="component-error"
                // defaultValue="Composed TextField"
                // aria-describedby="component-error-text"
                value={formik.values.role_id}
                onChange={formik.handleChange}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <Stack
              direction="column"
              spacing={1}
              justifyContent="start"
              alignItems="start"
              width="100%"
            >
              <Typography
                variant="body1"
                colo="textSecondary"
                display="flex"
                gap={1}
              >
                <Typography variant="body1" color="error.main">
                  *
                </Typography>
                {/* {t("typography.image")} */}
                profile
              </Typography>

              <FileInput
                accept={{
                  "image/jpg": [],
                  "image/jpeg": [],
                  "image/png": [],
                }}
                name="image"
                shape="square"
                value={formik.values.profile}
                onChange={(value) => formik.setFieldValue("profile", value)}
              />
            </Stack>

            <Button
              // onClick={addUserHandle}
              onClick={formik.handleSubmit}
              component="label"
              // role={undefined}
              variant="contained"
              // tabIndex={-1}
              // startIcon={<AddCircleOutlineIcon />}
              sx={{
                marginInline: "4px",
                paddingBlock: "11px",
                background: "#172331",
                color: "#006ae6",
              }}
            >
              افزودن کاربر
              {/* <VisuallyHiddenInput type="file" /> */}
            </Button>
          </Box>
        </Modal>
      )}
    </>
  );
}

const ButtonAddUser = ({ handleOpen }) => {
  return (
    <Button
      onClick={handleOpen}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<AddCircleOutlineIcon />}
      sx={{
        // marginInline: "4px",
        paddingBlock: "11px",
        background: "#172331",
        color: "#fff",
      }}
    >
      افزودن کاربر
      {/* <VisuallyHiddenInput type="file" /> */}
    </Button>
  );
};

export function ModalAddUser() {
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
