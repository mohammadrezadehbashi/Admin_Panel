import * as React from "react";
import { styled } from "@mui/system";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Checkbox from "@mui/material/Checkbox";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Box, Skeleton } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

// import ModalAddProduct from "./managment/productManagement/ModalAddProduct";
import ModalUpdateUser from "./ModalUpdateUser";
import dayjs from "dayjs";
import { changeStatusApi, getRoleApi } from "../../services/allUserServices";
import ModalResetPassword from "./ModalResetPassword";

import axios from "axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

  
export default function TableCustomized({ list, loading }) {
  console.log("list", list, Object.values(list)[0]?.data?.data?.users);
  // const users = Object.values(list)[0]?.data?.data?.users;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // State to manage the status of each user
  const [userStatus, setUserStatus] = React.useState(
    list.reduce((acc, row) => {
      acc[row.id] = row.status === "فعال"; // Assuming "فعال" means active
      return acc;
    }, {})
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //    Select Actions
  const [age, setAge] = React.useState("");
  const [switcher, setSwitch] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleStatusChange = async (row) => {
    const updatedStatus = !userStatus[row.id]; // Toggle status
    setUserStatus((prevStatus) => ({
      ...prevStatus,
      [row.id]: updatedStatus,
    }));

    // Call the API to update the status
    await changeStatusApi(row);
  };

  const getRoleApii = async () => {
    const token = "94|UTxbBpYvRBTQx1aB28YEguPYfYyilSZhPCYkOnt562fcfe3e";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };

    try {
      // Use await to get the response
      const response = await axios.post(
        "https://maloskshop.ir/public/api/v1/dashboard/administrator/public/getRoles",
        config
      );
      console.log("API Response:", response);

      // Return the API response data
      return response.data; // Adjust this depending on the response structure
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Error Response Data:", error.response.data);
        console.error("Error Status Code:", error.response.status);
        console.error("Error Headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error Message:", error.message);
      }
      return null;
    }
  };
  React.useEffect(() => {
    getRoleApii();
  }, []);

  console.log("getRoleApi()", getRoleApii());

  const renderSkeletonRow = () => (
    <tr>
      <td
        style={{
          flex: 1,
          justifyContent: "right",
          minWidth: "230px",
          width: "40%",
          height: "85px",
        }}
      >
        <Skeleton
          variant="rectangular"
          // width={30}
          // height={30}
        />
      </td>
      <td style={{ width: "10%" }}>
        <Skeleton
          variant="text"
          // width={230}
        />
      </td>
      <td style={{ minWidth: "95px", width: "10%" }}>
        <Skeleton variant="text" width={80} />
      </td>
      <td style={{ width: "10%" }}>
        <Skeleton variant="text" width={100} />
      </td>
      <td style={{ minWidth: "200px", width: "20%" }}>
        <Skeleton variant="text" width={80} />
      </td>
      <td style={{ width: "10%" }}>
        <Skeleton variant="text" width={150} />
      </td>
      <td>
        <Skeleton variant="rectangular" width={50} height={30} />
      </td>
    </tr>
  );

  return (
    <Root
      sx={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "auto",
      }}
    >
      <table aria-label="custom pagination table" dir="rtl">
        <thead sx={{}}>
          <tr>
            <th>
              <Checkbox {...label} defaultChecked />
            </th>
            <th>نام</th>
            <th>نقش</th>
            <th>واپسین ورود</th>
            <th>وضعیت</th>
            <th>تاریخ نام نویسی</th>
            <th>کارکردها</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? [...Array(5)].map((_, index) => renderSkeletonRow())
            : (rowsPerPage > 0
                ? list?.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : list
              ).map((row) => (
                <tr key={row.id}>
                  {console.log("row", row)}
                  <th style={{ width: "2%" }}>
                    <Checkbox
                      {...label}
                      sx={{ color: "#60626d" }}
                      //   defaultChecked
                    />
                  </th>
                  <td
                    style={{
                      flex: 1,
                      justifyContent: "right",
                      minWidth: "23%",
                      // width: "20%",
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar
                        sx={{
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                        }}
                      >
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                        {/* <Box sx={{ display: "flex" }}> */}
                        <ListItemText
                          sx={{ textAlign: "right" }}
                          primary={row.first_name}
                          secondary="Jan 9, 2014"
                        />
                        {/* </Box> */}
                      </ListItemAvatar>
                      {/* <ListItemText primary={`${row.name}`} secondary="Jan 9, 2014" /> */}
                    </ListItem>
                  </td>
                  <td style={{ minWidth: "7%" }} align="right">
                    <FormControl fullWidth>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: "#60626d" }}
                      >
                        {row?.roles[0]?.name}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="row?.roles[0]?.name"
                        value={age}
                        // label="Age"
                        onChange={handleChange}
                      >
                        {/* {getRoleApi.map((role) => (
                      {console.log("REre",role)
                      }
                      <MenuItem value={role.id}>{role.name}</MenuItem>
                    ))} */}
                      </Select>
                    </FormControl>
                  </td>
                  <td style={{ minWidth: "95px", width: "10%" }} align="right">
                    {dayjs(row.updated_at).format("YY/MM/DD HH:mm")}
                  </td>
                  <td
                    style={{
                      width: "10%",
                      paddingLeft: "10%",
                    }}
                  >
                    <FormControlLabel
                      sx={{justifyContent: "right" }}
                      control={
                        <Switch
                          // checked={row.status === "فعال" ? true : false}
                          // onChange={() => changeStatusApi(row)}

                          checked={userStatus[row.id]}
                          onChange={() => handleStatusChange(row)}
                        />
                      }
                      label={userStatus[row.id] ? "فعال" : "غیرفعال"}
                    />
                  </td>
                  <td style={{ minWidth: "200px", width: "20%" }} align="right">
                    {row.jalali_date}
                  </td>
                  <td style={{ width: "10%" }} align="right">
                    {/* {row.actions} */}
                    <Box sx={{ minWidth: 60, color: "#fff" }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          sx={{ color: "#60626d" }}
                        >
                          . . .
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          //   value={age}
                          label="َActions"
                          onChange={handleChange}
                          sx={{ background: "#1b1c22" }}
                        >
                          <ModalUpdateUser user_id={row.id} />
                          <MenuItem value={20} sx={{ color: "#60626d" }}>
                            Delete
                          </MenuItem>
                          <ModalResetPassword user_id={row.id} />
                        </Select>
                      </FormControl>
                    </Box>
                  </td>
                </tr>
              ))}
          {emptyRows > 0 && (
            <tr style={{ height: 34 * emptyRows }}>
              <td colSpan={3} aria-hidden />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr style={{ width: "100%" }}>
            <CustomTablePagination
              // style={{ width: "100%" }}
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              //   colSpan={3}
              count={list.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  "aria-label": "rows per page",
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                  slots: {
                    firstPageIcon: FirstPageRoundedIcon,
                    lastPageIcon: LastPageRoundedIcon,
                    nextPageIcon: ChevronRightRoundedIcon,
                    backPageIcon: ChevronLeftRoundedIcon,
                  },
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  );
}


const blue = {
  50: "#F0F7FF",
  200: "#A5D8FF",
  400: "#3399FF",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Root = styled("div")(
  ({ theme }) => `
//   border-radius: 12px;
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  overflow: clip;

  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    border: none;
    width: 100%;
    margin: -1px;
    // background:red;
  }

  td,
  th {
    // border: 1px solid ${
      theme.palette.mode === "dark" ? grey[800] : grey[200]
    };
   border-bottom:1px dashed #26272f ;
    text-align: right;
    padding: 8px;
    // background:blue;
    padding-right:10px
  }

  `
);

const CustomTablePagination = styled(TablePagination)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    // background:orange;
    // width:100%;
    min-width: 400px;
    // color:white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 4px 0;
    // @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    // }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    font-family: 'IBM Plex Sans', sans-serif;
    padding: 2px 2px 2px 4px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 6px; 
    background-color: transparent;

    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    transition: all 100ms ease;
    color:white;
    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }

    &:focus {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
      border-color: ${blue[400]};
    }
  }

  & .${classes.displayedRows} {
    margin: 0;
    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    display: flex;
    gap: 6px;
    border: transparent;
    text-align: center;
  }

  & .${classes.actions} > button {
    display: flex;
    align-items: center;
    padding: 0;
    border: transparent;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    transition: all 120ms ease;
    color:white;

    > svg {
      font-size: 22px;
    }

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }

    &:focus {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
      border-color: ${blue[400]};
    }

    &:disabled {
      opacity: 0.3;
      &:hover {
        border: 1px solid ${
          theme.palette.mode === "dark" ? grey[800] : grey[200]
        };
        background-color: transparent;
      }
    }
  }
  `
);

 
