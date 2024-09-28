import Axios from "axios";

export const infoProductApi = async (id) => {
 console.log("ididididid",id);
 
  const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let _id = String(id);

  // try {
  const response =await Axios.post(
      "https://maloskshop.ir/public/api/v1/dashboard/administrator/products/info",
      {
        // first_name: "mohammadali",
        // last_name: "alavi",
        // username: "hadi123",
        // email: "had@gmail.com",
        // mobile: "0930902302",
        // address: "kish",
        // profile: null,
        product_id: _id,
      },
      config
    );
console.log("RESSSSS",response);

    return response;
  // } catch (error) {
  //   console.log(error, "error");
  // }
};

export const getBrandApi = ({ setlist }) => {
  // const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";

  // const token = "89|D08QTCZgNswqkbP4tIQDJbjSEwwyULiI8og3kLhT8872a674";
  const token = "27|gd4zDuYLMOpbmGPxnfardsaTfIU1zaiTHX8AcvJUf187c4da";
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // try {
  Axios.post(
    "https://maloskshop.ir/public/api/v1/dashboard/administrator/public/getBrands",
    config
  ).then((res) =>
    console.log("ressssss", setlist(res)).catch((e) => console.log('ddd',e))
  );
  // console.log("res",response);

  // return response;
  // } catch (error) {
  //   console.log(error, "error");
  // }
};

export const getProductTypeApi = ({ setlistPT }) => {
  // const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";

  // const token = "89|D08QTCZgNswqkbP4tIQDJbjSEwwyULiI8og3kLhT8872a674";
  const token = "27|gd4zDuYLMOpbmGPxnfardsaTfIU1zaiTHX8AcvJUf187c4da";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // try {
  Axios.post(
    "https://maloskshop.ir/public/api/v1/dashboard/administrator/public/getProductTypes",
    config
  ).then((res) =>
    console.log("ressssssPT", setlistPT(res)).catch((e) => console.log("zzzzz", e))
  );
  // console.log("res",response);

  // return response;
  // } catch (error) {
  //   console.log(error, "error");
  // }
};

export const AttachTagApi =async ({ data }) => {
  // const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";
  console.log('datadata',data);

  // const token = "89|D08QTCZgNswqkbP4tIQDJbjSEwwyULiI8og3kLhT8872a674";
   const formdata = new FormData();

   formdata.append("product_id", data.product_id);
   formdata.append("tag", data.tag);

   const token = "27|gd4zDuYLMOpbmGPxnfardsaTfIU1zaiTHX8AcvJUf187c4da";

   const config = {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   };

   // try {
   const response =await Axios.post(
     "https://maloskshop.ir/public/api/v1/dashboard/administrator/products/attachTag",
     formdata,
     config
   );

   console.log("Response:", response);
  //  return response;
  //   .then((res) =>
  //   console
  //     .log("ressssssPT", setlistPT(res))
  //     .catch((e) => console.log("zzzzz", e))
  // );
  // console.log("res",response);

 
  // } catch (error) {
  //   console.log(error, "error");
  // }
};

