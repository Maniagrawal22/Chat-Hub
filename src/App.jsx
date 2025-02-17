import React from "react";
import Menu from "./component/Menu";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import SideBar from "./component/userComponents/SideBar";
import Header from "./component/userComponents/Header";
import UserHome from "./component/userComponents/UserHome";
import Footer from "./component/userComponents/Footer";
import { useSelector } from "react-redux";
import UserList from "./component/userComponents/UserList";
import EditProfile from "./component/userComponents/EditProfile";
import ChangePassword from "./component/userComponents/ChangePassword";
import MyProfile from "./component/userComponents/MyProfile";
import Logout from "./component/userComponents/Logout";
import OurPosts from "./component/userComponents/OurPosts";
import ViewSpecificUserPost from "./component/userComponents/ViewSpecificUserPost";
import UploadPost from "./component/userComponents/UploadPost";

function App() {
  const data = useSelector((state) => state.chatuserData.value);
  console.log(data.isLoginStatus);
  return (
    <div>
      {data.isLoginStatus ? (
        <div className="wrapper">
          <SideBar />
          <div className="main-panel">
            <Header />
            <Routes>
              <Route path="/userHome" element={<UserHome />}></Route>
              <Route path="/userList" element={<UserList />}></Route>
              <Route path="/ourPosts" element={<OurPosts />}></Route>
              <Route path="/editProfile" element={<EditProfile />}></Route>
              <Route
                path="/changePassword"
                element={<ChangePassword />}
              ></Route>
              <Route path="/myProfile" element={<MyProfile />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/viewSpecificUserPost" element={<ViewSpecificUserPost/>}></Route>
              <Route path="/uploadPost" element={<UploadPost/>}></Route>
            </Routes>

            <Footer />
          </div>
        </div>
      ) : (
        <div className="container">
          <Menu />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
