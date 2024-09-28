import { useEffect, useState } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FileInput from "../modules/FileInput";
import { useFormik } from "formik";
import { attachTagApi, getBrandApi, getProductTypeApi } from "../../services/productService";
import FileInputPrp from "../modules/FileInputProduct";

// import { VisuallyHiddenInput } from "../../../../pages/UserManagmentPage";

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

export default function ModalAddProduct({ product_id }) {
  console.log("product_id", product_id);

  const [open, setOpen] = useState(false);
  // const [list, setlist] = useState([]);
  // const [listPT, setlistPT] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // const ProductForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      slug: "",
      brand_id: "",
      product_type_id: "",
      product_image: null,
    },
    onSubmit: async (values) => {
      const formdata = new FormData();

      formdata.append("name", values.name);
      formdata.append("description", values.description);
      formdata.append("slug", values.slug);
      formdata.append("brand_id", values.brand_id);
      formdata.append("product_type_id", values.product_type_id);
      formdata.append("product_image", values.product_image);

      const token = "27|gd4zDuYLMOpbmGPxnfardsaTfIU1zaiTHX8AcvJUf187c4da";
      // const token = "89|D08QTCZgNswqkbP4tIQDJbjSEwwyULiI8og3kLhT8872a674";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await Axios.post(
          "https://maloskshop.ir/public/api/v1/dashboard/administrator/products/create",
          formdata,
          config
        );
        console.log("Response:", response);
        return response
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

 

   console.log("val", formik.values.brand_id ,formik.values.product_type_id);
  
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
         <Box
           sx={{
             width: "500px",
             margin: "auto",
             bgcolor: "background.paper",
             boxShadow: 24,
             p: 4,
             borderRadius: "10px",
             display: "flex",
             flexDirection: "column",
             gap: "16px", // Add consistent gap between form controls
             direction: "rtl",
           }}
         >
           <Typography
             id="modal-modal-title"
             variant="h5"
             component="h2"
             align="center"
             gutterBottom
           >
             افزودن محصول
           </Typography>

           {/* Name Product */}
           <FormControl variant="standard" fullWidth>
             <InputLabel htmlFor="component-error">نام کالا</InputLabel>
             <Input
               name="name"
               type="text"
               onChange={formik.handleChange}
               value={formik.values.name}
             />
           </FormControl>

           {/* Description */}
           <FormControl variant="standard" fullWidth>
             <InputLabel htmlFor="component-error">توضیحات</InputLabel>
             <Input
               name="description"
               type="text"
               onChange={formik.handleChange}
               value={formik.values.description}
             />
           </FormControl>

           {/* Slug */}
           <FormControl variant="standard" fullWidth>
             <InputLabel htmlFor="component-error">اسلاگ</InputLabel>
             <Input
               name="slug"
               type="text"
               onChange={formik.handleChange}
               value={formik.values.slug}
             />
           </FormControl>

           {/* Brand Select */}
           <FormControl variant="standard" fullWidth>
             <InputLabel id="demo-controlled-open-select-label">
               برند
             </InputLabel>
             <Select
               labelId="demo-controlled-open-select-label"
               id="demo-controlled-open-select"
               name="brand_id"
               value={formik.values.brand_id}
               onChange={formik.handleChange}
             >
               <MenuItem value="">
                 <em>None</em>
               </MenuItem>
               <MenuItem value={"1"}>دخترانه</MenuItem>
               <MenuItem value={"2"}>پسرانه</MenuItem>
             </Select>
           </FormControl>

           {/* Product Type Select */}
           <FormControl variant="standard" fullWidth>
             <InputLabel id="demo-controlled-open-select-pt-label">
               نوع فروش کالا
             </InputLabel>
             <Select
               labelId="demo-controlled-open-select-pt-label"
               id="demo-controlled-open-pt-select"
               name="product_type_id"
               value={formik.values.product_type_id}
               onChange={formik.handleChange}
             >
               <MenuItem value="">
                 <em>None</em>
               </MenuItem>
               <MenuItem value={"1"}>فروش ویژه</MenuItem>
               <MenuItem value={"2"}>فروش ساده</MenuItem>
             </Select>
           </FormControl>

           {/* Tag Input */}
           {/* <FormControl>
             <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
               <Input
                 id="outlined-basic"
                 name="tag"
                 placeholder="تگ"
                 value={formikAttachTag.values.tag}
                 onChange={formikAttachTag.handleChange}
               />
               <Button
                 onClick={formikAttachTag.handleSubmit}
                 variant="contained"
                 sx={{
                   backgroundColor: "#006ae6",
                   color: "#ffffff",
                   padding: "8px 16px",
                 }}
               >
                 افزودن تگ
               </Button>
             </Box>
           </FormControl> */}

           {/* Image Input */}
           <FormControl variant="standard" fullWidth>
             <InputLabel htmlFor="component-error">تصویر کالا</InputLabel>
             {/* <input
               type="file"
               name="product_image"
               //  onChange={(event) =>
               //    formik.setFieldValue(
               //      "product_image",
               //      event.currentTarget.files[0]
               //    )
               //  }
               onChange={(value) =>
                 formik.setFieldValue("product_image", value)
               }
               style={{
                 marginTop: "8px",
                 border: "1px solid #ccc",
                 padding: "8px",
                 borderRadius: "5px",
               }}
             /> */}

             <FileInputPrp
               accept={{
                 "image/jpg": [],
                 "image/jpeg": [],
                 "image/png": [],
               }}
               name="product"
               shape="square"
               value={formik.values.profile}
               onChange={(value) =>
                 formik.setFieldValue(
                   "product_image",
                  //  value.currentTarget.files[0]
                   value
                 )
               }
               sx={{width:120,height:5}}
             />
           </FormControl>

           {/* Submit Button */}
           <Button
             onClick={formik.handleSubmit}
             variant="contained"
             fullWidth
             sx={{
               backgroundColor: "#172331",
               color: "#ffffff",
               padding: "12px 0",
               borderRadius: "8px",
               "&:hover": {
                 backgroundColor: "#0f1a28",
               },
             }}
           >
             افزودن کالا
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
        marginInline: "4px",
        paddingBlock: "11px",
        background: "#172331",
        color: "#fff",
      }}
    >
      افزودن کالا
      {/* <VisuallyHiddenInput type="file" /> */}
    </Button>
  );
};
