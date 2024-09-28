import React, { useState } from "react";

// libraries
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Typography,
  Input,
  Button,
} from "@mui/material";
import { Height, Password } from "@mui/icons-material";
import { useFormik } from "formik";
import axios from "axios";

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   Height:900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  marginBlock: "170px",
};

export default function ModalResetPassword({ user_id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: "",
      user_id: user_id,
    },
    //    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const formData = new FormData();
      formData.append("user_id", values.user_id);
      formData.append("password", values.password);

      try {
        const response = await axios.post(
          "https://maloskshop.ir/public/api/v1/dashboard/administrator/users/resetPassword",
          formData,
          config
        );
        console.log("Product updated successfully", response);
      } catch (error) {
        console.log("Error updating product", error);
      }
    },
  });

  console.log("user_id", user_id);

  return (
    <>
      <ButtonResetPasswordUser handleOpen={handleOpen} />
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
          style={{ overflowY: "auto" }}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ویرایش گذرواژه
            </Typography>

            <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="password">password</InputLabel>
              <Input
                id="password"
                name="password"
                // defaultValue={infoUser?.first_name}
                // value={حassword}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </FormControl>
            {/* <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="re password">re password</InputLabel>
              <Input
                id="re password"
                name="password"
                // defaultValue={infoUser?.first_name}
                value={Password}
                // value={formik.values.username}
                onChange={formik.handleChange}
              />
            </FormControl> */}

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
              ویرایش گذرواژه
              {/* <VisuallyHiddenInput type="file" /> */}
            </Button>
          </Box>
        </Modal>
      )}
    </>
  );
}

const ButtonResetPasswordUser = ({ handleOpen }) => {
  return (
    <MenuItem value={20} sx={{ color: "#60626d" }} onClick={handleOpen}>
      Reset Password
    </MenuItem>
  );
};
