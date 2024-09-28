import { useEffect, useState } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

import { VisuallyHiddenInput } from "../../pages/UserManagmentPage";
import MenuItem from "@mui/material/MenuItem";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useFormik } from "formik";
import { infoUserApi, updateUserApi } from "../../services/allUserServices";
import FileInput from "../modules/FileInput";

import { LazyLoadImage } from "react-lazy-load-image-component";
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
  // overflowY: "auto",
  // background:"red"
  marginBlock: "170px",
};

export default function ModalUpdateUser({ user_id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  
  const [infoUser, setInfoUser] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await infoUserApi(user_id);
        setInfoUser(response.data.data.user);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [user_id]);

  console.log("cccc", user_id, infoUser, loading);

  const [firstName, setFirstName] = useState(infoUser?.first_name);
  const [lastName, setLastName] = useState(infoUser?.last_name);
  const [username, setUsername] = useState(infoUser?.username);
  const [email, setEmail] = useState(infoUser?.email);
  const [mobile, setMobile] = useState(infoUser?.mobile);
  const [address, setAddress] = useState(infoUser?.address);
  const [profile, setProfile] = useState(null);
  const [role_id, setRole] = useState("");

  const [information, setinformation] = useState({
    firstName: infoUser?.first_name,
  });

  // const formik = useFormik({
  //   initialValues: {
  //     first_name: infoUser?.first_name || "",
  //     last_name: infoUser?.last_name || "",
  //     username: infoUser?.username || "",
  //     // password: infoUser?.data?.data?.user.password,
  //     email: infoUser?.email || "",
  //     mobile: infoUser?.mobile || "",
  //     address: infoUser?.address || "",
  //     role_id: infoUser?.roles[0]?.pivot?.user_id || "",
  //     profile: infoUser?.profile || "",
  //   },
  //   enableReinitialize: true,
  //   // validationSchema:,
  //   onSubmit: async (res) => {
  //     console.log("res,", res);
  //     const response = await updateUserApi(res);

  //     console.log("response", response);

  //     if (response.error === false) {
  //       console.log("trrrrrrrrrue");
  //     } else {
  //       console.log(response.error);
  //     }
  //   },
  // });


  

  // update user
  const updateUserHandle = async () => {
    const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("address", address);
    if (profile) {
      console.log("Appending profile", profile); // Log the file before appending
      formData.append("profile", profile);
    }

    formData.append("user_id", `${infoUser?.id}`);

    console.log("image", profile, username);

    try {
      const responsive = Axios.post(
        "https://maloskshop.ir/public/api/v1/dashboard/administrator/users/update",
        formData,
        config
      );

      console.log("Update", responsive);
      handleClose();
    } catch (error) {
      console.log(error, "error");
    }
  };

  // changePssword
  const passwordResetHandler = () => {
    const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // try {
    Axios.post(
      "https://maloskshop.ir/public/api/v1/dashboard/administrator/users/resetPassword",
      {
        user_id: "6",
        password: "111111",
      },
      config
    )
      .then((res) => {
        console.log("change PAssword", res);
        // handleClose();
        // infoUserHandle();
      })
      .catch((err) => console.log(err));
  };

  console.log("infoUser?.first_name", infoUser?.profile, profile);

  return (
    <>
      <ButtonAddUser handleOpen={handleOpen} />
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ overflowY: "auto" }}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ویرایش کاربر
            </Typography>

            <FormControl
              sx={{ paddingBlock: "5px" }}
              // error
              variant="standard"
            >
              <InputLabel htmlFor="username">firstName</InputLabel>
              <Input
                id="firstName"
                name="firstName"
                // id="component-error"
                // defaultValue="Composed TextField"
                // aria-describedby="component-error-text"
                defaultValue={infoUser?.first_name}
                value={firstName}
                // value={formik.values.username}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="component-error">Last Name</InputLabel>
              <Input
                id="lastName"
                name="lastName"
                defaultValue={infoUser?.last_name}
                value={lastName}
                // aria-describedby="component-error-text"
                onChange={(e) => setLastName(e.target.value)}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">Username</InputLabel>
              <Input
                id="component-error"
                defaultValue={infoUser?.username}
                value={username}
                aria-describedby="component-error-text"
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">Email</InputLabel>
              <Input
                id={`${email}`}
                defaultValue={infoUser?.email}
                value={email}
                aria-describedby="component-error-text"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">Mobile</InputLabel>
              <Input
                id="component-error"
                defaultValue={infoUser?.mobile}
                value={mobile}
                aria-describedby="component-error-text"
                onChange={(e) => setMobile(e.target.value)}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">Address</InputLabel>
              <Input
                id="component-error"
                defaultValue={infoUser?.address}
                value={address}
                aria-describedby="component-error-text"
                onChange={(e) => setAddress(e.target.value)}
              />
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
            </FormControl>

            <FormControl error variant="standard">
              {/* <InputLabel htmlFor="component-error">Profile</InputLabel>
              <Input
                id="component-error"
                defaultValue={infoUser?.profile}
                value={profile}
                aria-describedby="component-error-text"
                onChange={(e)=>setProfile(e.target.value)}
              /> */}
              {/* <FormHelperText id="component-error-text">Error</FormHelperText> 
              <div>
                <img src={`${infoUser?.profile}`} width={100} height={100} />
              </div>*/}
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "100%",
                  height: 120,
                  minHeight: 120,
                  bgcolor: "background.paper",
                  border: `1px solid #1e293b"}`,
                  borderRadius: 1,
                  cursor: "pointer",
                  overflow: "hidden",
                  "&:hover": {
                    border: "1px solid #1e293b",
                  },
                }}
              >
                <input
                  // value={profile}
                  accept=".jpg, .jpeg, .png"
                  name="image"
                  type="file"
                  onChange={(e) => {
                    console.log("onhange", e.target.files[0]);
                    setProfile(e.target.files[0]);
                  }}
                />

                <LazyLoadImage
                  src={
                    profile !== null
                      ? URL.createObjectURL(profile)
                      : infoUser?.profile
                  }
                  // src={URL.createObjectURL(profile)}
                  //   alt={files[0]?.title || "preview"}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Stack>
              {/* <FileInput
                accept={{
                  "image/jpg": [],
                  "image/jpeg": [],
                  "image/png": [],
                }}
                name="image"
                shape="square"
                value={profile}
                onChange={(e) => setProfile(e.target.files[0])}
              /> */}
  
              
              <Button
                onClick={passwordResetHandler}
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
                تغییر گذرواژه
                {/* <VisuallyHiddenInput type="file" /> */}
              </Button>
            </FormControl>

            <Button
              onClick={updateUserHandle}
              // onClick={formik.handleSubmit}
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
              ویرایش کاربر
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
    <MenuItem value={20} sx={{ color: "#60626d" }} onClick={handleOpen}>
      Edit
    </MenuItem>
  );
};
