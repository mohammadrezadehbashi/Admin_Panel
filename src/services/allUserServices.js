import Axios from "axios";

export const addUserApi = (data) => {
  console.log("data", data);
  const token = "27|gd4zDuYLMOpbmGPxnfardsaTfIU1zaiTHX8AcvJUf187c4da";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  //   try {

  const formData = new FormData();
  formData.append("first_name", data.first_name);
  formData.append("last_name", data.last_name);
  formData.append("username", data.username);
  formData.append("password", data.password);
  formData.append("email", data.email);
  formData.append("mobile", data.mobile);
  formData.append("address", data.address);
  formData.append("role_id", data.role_id);
  formData.append("file", data.profile);

  const response = Axios.post(
    "https://maloskshop.ir/public/api/v1/dashboard/administrator/users/create",
    //   {
    //     first_name: "hossein",
    //     last_name: "alavi",
    //     username: "hosein123",
    //     password: "123456",
    //     email: "hose@gmail.com",
    //     mobile: "0930902302",
    //     address: "kish",
    //     role_id: "3",
    //     profile: data.profile,
    //   },
    formData,
    config
  );
  console.log("addUser", response);
  return response;
  //   } catch (error) {
  //     console.log(error, "error");
  //   }
};

export const getAllUserApi = () => {
  const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";
  // const token = "62|iPrIn0c7OG1fzOJ3FjJiNDi19BTQtFrTdRYRfLp134a8639a";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = Axios.get(
      "https://maloskshop.ir/public/api/v1/dashboard/administrator/users/index",
      {
        text: "",
        page: "1",
        per_page: "2",
      },
      config
    );

    console.log("SAdassada", response);
    // data.push(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const infoUserApi = async (id) => {
  const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let _id = String(id);
  // try {
  const res = await Axios.post(
    "https://maloskshop.ir/public/api/v1/dashboard/administrator/users/info",
    {
      // first_name: "mohammadali",
      // last_name: "alavi",
      // username: "hadi123",
      // email: "had@gmail.com",
      // mobile: "0930902302",
      // address: "kish",
      // profile: null,
      user_id: _id,
    },
    config
  );
  // if (loading === true) {
  return res;
  // }
  //  .then((res) => {
  //    console.log("infoooo", res);
  //    return res;
  //  })
  //  .catch((err) => console.log(err));
};

export const updateUserApi = async (res, user_id) => {
  console.log("data......", res, user_id);
  const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const formData = new FormData();
  formData.append("first_name", res.first_name);
  formData.append("last_name", res.last_name);
  formData.append("username", res.username);
  formData.append("email", res.email);
  formData.append("mobile", res.mobile);
  formData.append("address", res.address);
  if (res.profile) {
    console.log("Appending profile", res.profile); // Log the file before appending
    formData.append("profile", res.profile);
  }

  formData.append("user_id", `${user_id}`);

  // try {
  const response = await Axios.post(
    "https://maloskshop.ir/public/api/v1/dashboard/administrator/users/update",
    // {
    //   first_name: "oijoijoi",
    //   last_name: "oioiioioio",
    //   username: "iui",
    //   email: "hgggg",
    //   mobile: "0847947847",
    //   address: "l;pllp",
    //   profile: null,
    //   user_id: "6",
    // },
    formData,
    config
  );
  // .then((res) => {
  //  console.log("ssss", res.data.data.user)
  console.log("Update", res);
  //  handleClose();
  return response;
  // infoUserHandle();
  // })
  // .catch((err) => console.log(err));
  // } catch (error) {
  //   console.log(error, "error");
  // }
};

export const changeStatusApi = async (row) => {
  const native = row.status === "فعال" ? "1" : "0";
  // const setNative = setSwitch(native);
  const formdata = new FormData();

  formdata.append("user_id", row.id);
  formdata.append("native", native);

  const token = "27|gd4zDuYLMOpbmGPxnfardsaTfIU1zaiTHX8AcvJUf187c4da";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await Axios.post(
    "https://maloskshop.ir/public/api/v1/dashboard/administrator/users/changeStatus",
    formdata,
    config
  );
  return response;
  // console.log("REs",response);
};

export const getRoleApi = async () => {
  const token = "17|TLNxP8o7JXOuX5wpDC1H6hYlAokpBzQTwDD8lHSIde5ac98c";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    // Use await to get the response
    const response = await Axios.post(
      "https://maloskshop.ir/public/api/v1/dashboard/administrator/public/getRoles",
      config
    );
    console.log("API Response:", response);

    // Return the API response data
    return response.data; // Adjust this depending on the response structure
  } catch (error) {
    console.error("Error fetching roles:", error);
    return null; // Return a default value or handle the error
  }
};


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