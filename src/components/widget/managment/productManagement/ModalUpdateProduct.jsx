import { useEffect, useState } from "react";
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

import { VisuallyHiddenInput } from "../../../../pages/UserManagmentPage";
import MenuItem from "@mui/material/MenuItem";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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

export default function ModalUpdateProduct() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [profile, setProfile] = useState("");

  const infoProductHandle = async () => {
    const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // try {
    Axios.post(
      "https://maloskshop.ir/public/api/v1/dashboard/administrator/products/info",
      {
        // first_name: "mohammadali",
        // last_name: "alavi",
        // username: "hadi123",
        // email: "had@gmail.com",
        // mobile: "0930902302",
        // address: "kish",
        // profile: null,
        product_id: "6",
      },
      config
    )
      .then((res) => {
        //  console.log("ssss", res.data.data.user)
        // console.log("infoooo", response);
        setFirstName(res.data.data.user.first_name);
        setLastName(res.data.data.user.last_name);
        setUsername(res.data.data.user.username);
        setEmail(res.data.data.user.email);
        setMobile(res.data.data.user.mobile);
        setAddress(res.data.data.user.address);
        setProfile(res.data.data.user.profile);
      })
      .catch((err) => console.log(err));
    // } catch (error) {
    //   console.log(error, "error");
    // }
  };

  useEffect(() => {
    infoProductHandle();
  }, []);

  // update Product
  const updateProductHandle = async () => {
    const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // try {
    Axios.post(
      "https://maloskshop.ir/public/api/v1/dashboard/administrator/products/update",
      {
        // product_id: firstName,
        // name: "hadaviani",
        // description: username,
        // slug: email,
        // brand_id: mobile,
        // product_type_id: address,
        // product_image: null,
      },
      config
    )
      .then((res) => {
        //  console.log("ssss", res.data.data.user)
        // console.log("Update", res);
        // handleClose();
        // infoUserHandle();
      })
      .catch((err) => console.log(err));
    // } catch (error) {
    //   console.log(error, "error");
    // }
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
          style={{ overflowY: "auto" }}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              افزودن کاربر
            </Typography>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">First Name</InputLabel>
              <Input
                id="component-error"
                defaultValue={`${firstName}`}
                // value={firstName}
                aria-describedby="component-error-text"
              />
              <FormHelperText id="component-error-text">Error</FormHelperText>
            </FormControl>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">Last Name</InputLabel>
              <Input
                id="component-error"
                defaultValue={`${lastName}`}
                aria-describedby="component-error-text"
              />
              <FormHelperText id="component-error-text">Error</FormHelperText>
            </FormControl>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">Username</InputLabel>
              <Input
                id="component-error"
                defaultValue={`${username}`}
                aria-describedby="component-error-text"
              />
              <FormHelperText id="component-error-text">Error</FormHelperText>
            </FormControl>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">Email</InputLabel>
              <Input
                id={`${email}`}
                defaultValue="Composed TextField"
                aria-describedby="component-error-text"
              />
              <FormHelperText id="component-error-text">Error</FormHelperText>
            </FormControl>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">Mobile</InputLabel>
              <Input
                id="component-error"
                defaultValue={`${mobile}`}
                aria-describedby="component-error-text"
              />
              <FormHelperText id="component-error-text">Error</FormHelperText>
            </FormControl>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">Address</InputLabel>
              <Input
                id="component-error"
                defaultValue={`${address}`}
                aria-describedby="component-error-text"
              />
              <FormHelperText id="component-error-text">Error</FormHelperText>
            </FormControl>

            <FormControl error variant="standard">
              <InputLabel htmlFor="component-error">Profile</InputLabel>
              <Input
                id="component-error"
                // defaultValue={`${address}`}
                aria-describedby="component-error-text"
              />
              <FormHelperText id="component-error-text">Error</FormHelperText>
              <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Administrator"
                  control={<Radio />}
                  label="Administrator"
                />
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="user"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>{" "}
              <Button
                onClick={infoProductHandle}
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
                ویرایش نقش
                {/* <VisuallyHiddenInput type="file" /> */}
              </Button>
              <FormLabel id="demo-radio-buttons-group-label">ُStatus</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Administrator"
                  control={<Radio />}
                  label="Administrator"
                />
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="user"
                />
                updateProductHandle
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>{" "}
              <Button
                // onClick={statusHandler}
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
                ویرایش وضعیت
                {/* <VisuallyHiddenInput type="file" /> */}
              </Button>
              <FormControl error variant="standard">
                <InputLabel htmlFor="component-error">
                  Change Password
                </InputLabel>
                <Input
                  id="component-error"
                  // defaultValue={`${username}`}
                  aria-describedby="component-error-text"
                />
                <FormHelperText id="component-error-text">Error</FormHelperText>
              </FormControl>
              <Button
                // onClick={passwordResetHandler}
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
              onClick={updateProductHandle}
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
    // <Button
    //   onClick={handleOpen}
    //   component="label"
    //   role={undefined}
    //   variant="contained"
    //   tabIndex={-1}
    //   startIcon={<AddCircleOutlineIcon />}
    //   sx={{
    //     marginInline: "4px",
    //     paddingBlock: "11px",
    //     background: "#172331",
    //     color: "#006ae6",
    //   }}
    // >
    //   افزودن کاربر
    //   {/* <VisuallyHiddenInput type="file" /> */}
    // </Button>
  );
};
