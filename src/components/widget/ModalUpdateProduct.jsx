import { useEffect, useState } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

// import { VisuallyHiddenInput } from "../../../../pages/UserManagmentPage";
import MenuItem from "@mui/material/MenuItem";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { infoProductApi } from "../../services/productService";
import CancelIcon from "@mui/icons-material/Cancel";

import { useFormik } from "formik";
import * as Yup from "yup";
import FileInput from "../modules/FileInput";
import FileInputPrp from "../modules/FileInputProduct";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Stack } from "@mui/material";

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
  // marginBlock: "170px",
};

export default function ModalUpdateProduct({ product_id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("product_id", String(product_id));
  //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [profile, setProfile] = useState("");

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    slug: "",
    brand_id: "",
    product_type_id: "",
    product_image: null,
    tags: [],
  });
  const [loading, setLoading] = useState(false);
  const [pro_t, setProduct] = useState([]);
  let product;
  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const response = await infoProductApi(product_id);
        const product = response?.data?.data?.product;
        console.log("prrrrrrrrrrrrrrrrr",product);
        
        setProduct(product?.image);
        
        setInitialValues({
          name: product?.name || "",
          description: product?.description || "",
          slug: product?.slug || "",
          brand_id: product?.brand_id || "",
          product_type_id: product?.product_type_id || "",
          product_image: product?.image || null,
          // tags: product?.tags?.map((e) => e.name) || [],
          tags: product?.tags || [],
        });
      } catch (error) {
        console.error("Failed to fetch product info:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductInfo();
  }, [product_id]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Product Name is required"),
    description: Yup.string().required("Description is required"),
    slug: Yup.string().required("Slug is required"),
    brand_id: Yup.string().required("Brand ID is required"),
    product_type_id: Yup.string().required("Product Type ID is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";

console.log("DA",values);


      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const formData = new FormData();
      formData.append("product_id", String(product_id));
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("slug", values.slug);
      formData.append("brand_id", values.brand_id);
      formData.append("product_type_id", values.product_type_id);
      formData.append("product_image", values.product_image);


      if (values.product_image) {
        formData.append("product_image", values.product_image); // Append the file object here
      }

      try {
        const response = await Axios.post(
          "https://maloskshop.ir/public/api/v1/dashboard/administrator/products/update",
          formData,
          config
        );
        console.log("Product updated successfully", response);
      } catch (error) {
        console.log("Error updating product", error);
      }
    },
  });

  const formikAttachTag = useFormik({
    initialValues: {
      product_id: product_id,
      tag: "",
    },
    onSubmit: async (values) => {
      //  const response = await attachTagApi(values);

      const formdata = new FormData();

      console.log("values.tag", values.tag);

      formdata.append("product_id", values.product_id);
      formdata.append("tag", values.tag);

      const token = "27|gd4zDuYLMOpbmGPxnfardsaTfIU1zaiTHX8AcvJUf187c4da";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // try {
      const response = Axios.post(
        "https://maloskshop.ir/public/api/v1/dashboard/administrator/products/attachTag",
        formdata,
        config
      );

      console.log("Response:", response);
      return response;
      // if (response.message === "با موفقیت وارد شدید") {
      //   navigate("/dashboard/");
      // } else {
      //   console.log(response.message);
      // }
    },
  });

  const formikDetachTag = useFormik({
    initialValues: {
      product_id: product_id,
      tag_id: "",
    },
    onSubmit: async (values) => {
      //  const response = await attachTagApi(values);

      const formdata = new FormData();

      console.log("values.tag", values);

      formdata.append("product_id", values.product_id);
      formdata.append("tag_id", values.tag_id);

      const token = "27|gd4zDuYLMOpbmGPxnfardsaTfIU1zaiTHX8AcvJUf187c4da";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // try {
      const response = Axios.post(
        "https://maloskshop.ir/public/api/v1/dashboard/administrator/products/detachTag",
        formdata,
        config
      );

      console.log("Response:", response);
      return response;
      // if (response.message === "با موفقیت وارد شدید") {
      //   navigate("/dashboard/");
      // } else {
      //   console.log(response.message);
      // }
    },
  });
 

  const addProductHandle = (productTagId) => {
    console.log("Sending product_tag_id:", productTagId); // Log the product_tag_id
    formikDetachTag.setFieldValue("tag_id", productTagId); // Set the product_tag_id in Formik
    formikDetachTag.handleSubmit(); // Submit the form
  };
  
  console.log(
    "pro_t",
    pro_t.image,
    formik.values,
    // URL.createObjectURL(formik.values.product_image)
    // URL.createObjectURL(formik.values.product_image)
  );


  return (
    <>
      <ButtonAddProduct handleOpen={handleOpen} />
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ overflowY: "auto" }}
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
              gap: "16px",
              direction: "rtl", // RTL for Persian text
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              align="right"
              gutterBottom
            >
              ویرایش محصول
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              {/* Product Name */}
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="name">نام محصول</InputLabel>
                <Input
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Product Name"
                  sx={{ textAlign: "right" }}
                />
                {formik.errors.name && formik.touched.name && (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                )}
              </FormControl>

              {/* Description */}
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="description">توضیحات</InputLabel>
                <Input
                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  placeholder="Description"
                  sx={{ textAlign: "right" }}
                />
                {formik.errors.description && formik.touched.description && (
                  <FormHelperText error>
                    {formik.errors.description}
                  </FormHelperText>
                )}
              </FormControl>

              {/* Slug */}
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="slug">مسیر</InputLabel>
                <Input
                  id="slug"
                  name="slug"
                  value={formik.values.slug}
                  onChange={formik.handleChange}
                  placeholder="Slug"
                  sx={{ textAlign: "right" }}
                />
                {formik.errors.slug && formik.touched.slug && (
                  <FormHelperText error>{formik.errors.slug}</FormHelperText>
                )}
              </FormControl>

              {/* Brand Selector */}
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="brand-select-label">برندها</InputLabel>
                <Select
                  labelId="brand-select-label"
                  id="brand-select"
                  name="brand_id"
                  value={formik.values.brand_id}
                  onChange={formik.handleChange}
                  label="Brands"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1">دخترانه</MenuItem>
                  <MenuItem value="2">پسرانه</MenuItem>
                </Select>
                {formik.errors.brand_id && formik.touched.brand_id && (
                  <FormHelperText error>
                    {formik.errors.brand_id}
                  </FormHelperText>
                )}
              </FormControl>

              {/* Product Type Selector */}
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="product-type-select-label">
                  نوع محصول
                </InputLabel>
                <Select
                  labelId="product-type-select-label"
                  id="product-type-select"
                  name="product_type_id"
                  value={formik.values.product_type_id}
                  onChange={formik.handleChange}
                  label="Product Type"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1">فروش ویژه</MenuItem>
                  <MenuItem value="2">فروش ساده</MenuItem>
                </Select>
                {formik.errors.product_type_id &&
                  formik.touched.product_type_id && (
                    <FormHelperText error>
                      {formik.errors.product_type_id}
                    </FormHelperText>
                  )}
              </FormControl>

              {/* Tags Section */}
              <FormControl margin="normal">
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Input
                    id="tag"
                    name="tag"
                    placeholder="تگ"
                    value={formikAttachTag.values.tag}
                    onChange={formikAttachTag.handleChange}
                    sx={{ textAlign: "right" }}
                  />
                  <Button
                    onClick={formikAttachTag.handleSubmit}
                    variant="contained"
                    sx={{ backgroundColor: "#006ae6", color: "#fff" }}
                  >
                    افزودن تگ
                  </Button>
                </Box>

                {/* List of tags */}
                {initialValues.tags?.map((tag) => (
                  <Button
                    key={tag.pivot.product_tag_id}
                    onClick={() => addProductHandle(tag.pivot.product_tag_id)}
                    variant="contained"
                    sx={{
                      margin: "5px",
                      backgroundColor: "#172331",
                      color: "#fff",
                    }}
                    endIcon={<CancelIcon />}
                  >
                    {tag.name}
                  </Button>
                ))}
              </FormControl>

              {/* Image Upload */}
              {/* <Box mb={2}>
                <Input
                  type="file"
                  name="product_image"
                  onChange={(event) =>
                    formik.setFieldValue(
                      "product_image",
                      event.currentTarget.files[0]
                    )
                  }
                />
              </Box> */}

              {/* <FileInputPrp
                accept={{
                  "image/jpg": [],
                  "image/jpeg": [],
                  "image/png": [],
                }}
                preview={pro_t?.image}
                name="product_image"
                shape="square"
                value={formik.values.product_image}
                onChange={(value) =>
                  formik.setFieldValue(
                    "product_image",
                    value.currentTarget.files[0]
                  )
                }
                sx={{ width: 120, height: 5 }}
              /> */}
              {/* <Stack
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
                  name="product_image"
                  type="file"
                  // value={formik?.values?.product_image}
                  onChange={(event) => {
                    console.log("event",event);
                    
                    formik.setFieldValue(
                      "product_image",
                      // event.currentTarget.files[0]
                      event
                    )
                  }}
                />
                <LazyLoadImage
                  src={
                    // formik.values.product_image !== null
                    //   ? URL.createObjectURL(formik.values.product_image)
                    //   :
                    // pro_t?.image
                    formik.values.product_image
                  }
                  // src={URL.createObjectURL(profile)}
                  //   alt={files[0]?.title || "preview"}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Stack> */}

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
                  accept=".jpg, .jpeg, .png"
                  name="product_image"
                  type="file"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0]; // Capture the selected file
                    formik.setFieldValue("product_image", file); // Update Formik with the file
                  }}
                />
                {formik.values.product_image && (
                  <LazyLoadImage
                    // src={
                    //   formik.values.product_image !== null
                    //     ? URL.createObjectURL(formik.values.product_image)
                    //     : pro_t.image} // Preview the selected file
                    src={
                      // input.files[0] instanceof Blob
                      //   ? URL.createObjectURL(input.files[0])
                      //   :
                        formik.values.product_image
                    } // Preview the selected file
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </Stack>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#172331",
                  color: "#ffffff",
                  padding: "12px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#0f1a28",
                  },
                }}
              >
                ویرایش کالا
              </Button>
            </form>
          </Box>
        </Modal>
      )}
    </>
  );
}

const ButtonAddProduct = ({ handleOpen }) => {
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

// {/* <Box sx={style}>
//   <Typography id="modal-modal-title" variant="h6" component="h2">
//     ویرایش کالا
//   </Typography>

//   <FormControl variant="standard">
//     <InputLabel htmlFor="name">Product Name</InputLabel>
//     <Input
//       id="name"
//       name="name"
//       defaultValue={infoProduct?.name}
//       value={name}
//       // aria-describedby="component-error-text"
//       onChange={(e) => setName(e.target.value)}
//     />
//     {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
//   </FormControl>

//   <FormControl variant="standard">
//     <InputLabel htmlFor="description">Description</InputLabel>
//     <Input
//       // id="component-error"
//       // defaultValue={`${lastName}`}
//       // aria-describedby="component-error-text"
//       id="description"
//       name="description"
//       defaultValue={`${infoProduct?.description}`}
//       value={description}
//       // aria-describedby="component-error-text"
//       onChange={(e) => setDescription(e.target.value)}
//     />
//     {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
//   </FormControl>

//   <FormControl variant="standard">
//     <InputLabel htmlFor="slug">Slug</InputLabel>
//     <Input
//       // id="component-error"
//       // defaultValue={`${username}`}
//       // aria-describedby="component-error-text"
//       id="slug"
//       name="slug"
//       defaultValue={infoProduct?.slug}
//       value={slug}
//       // aria-describedby="component-error-text"
//       onChange={(e) => setSlug(e.target.value)}
//     />
//     {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
//   </FormControl>

//   <FormControl variant="standard">
//     <InputLabel htmlFor="brand_id">BrandId</InputLabel>
//     <Input
//       id="brand_id"
//       name="brand_id"
//       // id={`${email}`}
//       // defaultValue="Composed TextField"
//       // aria-describedby="component-error-text"
//       defaultValue={infoProduct?.brand_id}
//       value={brand_id}
//       // aria-describedby="component-error-text"
//       onChange={(e) => setBrandId(e.target.value)}
//     />
//     {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
//   </FormControl>

//   <FormControl variant="standard">
//     <InputLabel htmlFor="product_type_id">Product_type_id</InputLabel>
//     <Input
//       id="product_type_id"
//       name="product_type_id"
//       // id="component-error"
//       // defaultValue={`${mobile}`}
//       // aria-describedby="component-error-text"
//       defaultValue={infoProduct?.product_type_id}
//       value={product_type_id}
//       // aria-describedby="component-error-text"
//       onChange={(e) => setProductTypeId(e.target.value)}
//     />
//     {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
//   </FormControl>

//   <FormControl>
//     <InputLabel>Image</InputLabel>
//     <input
//       name="product_image"
//       type="file"
//       onChange={(e) => setImage(e.target.files[0])}
//       // onChange={(event) => {
//       //   formik.setFieldValue(
//       //     "product_image",
//       //     event.currentTarget.files[0]
//       //   );
//       // }}
//     />
//   </FormControl>

//   <Button
//     onClick={updateProductHandle}
//     component="label"
//     // role={undefined}
//     variant="contained"
//     // tabIndex={-1}
//     // startIcon={<AddCircleOutlineIcon />}
//     sx={{
//       marginInline: "4px",
//       paddingBlock: "11px",
//       background: "#172331",
//       color: "#006ae6",
//     }}
//   >
//     ویرایش کاربر
//     {/* <VisuallyHiddenInput type="file" /> */}
//   </Button>
// </Box>; */}
