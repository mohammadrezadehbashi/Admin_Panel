import axios from "axios";

export const loginApi = async (data) => {
//   try {
    const response = await axios.post(
      "https://maloskshop.ir/public/api/v1/dashboard/login", data
    //   {
    //     username: data.username,
    //     password: data.password,
    //     // username: "gholami",
    //     // password: "123456",
    //   }
    );
      console.log("REEEES", response.data);
      return response.data;

    // setX(response.data);
    // setCaptchaImageUrl(`data:image/png;base64,${base64Image}`);
    // setCaptchaImageUrl(base64Image);
//   } catch (error) {
//     console.error("Error fetching captcha data:", error);
//   }
};
