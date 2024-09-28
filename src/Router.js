import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/LoginPage";
// import ProductsManagment from "./pages/ProductsManagment";
import ProductManagementPage from "./pages/ProductManagmentPage";
import {UserManagment} from "./pages/UserManagmentPage";
import CommentsManagment from "./pages/CommentsManagment";
import ArticlesManagment from "./pages/ArticlesManagment";
import  Dashboard  from "./pages/Dashboard";

const Routeres = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/dashboard/" element={<Home />}>
          {/* <Route  /> */}
          <Route path="" element={<Dashboard/>}/>
          <Route path="product_manage" element={<ProductManagementPage />} />
          <Route path="user_manage" element={<UserManagment />} />
          <Route path="comment_manage" element={<CommentsManagment />} />
          <Route path="article_manage" element={<ArticlesManagment />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routeres;
