import ContactPage from "./pages/contact";
import { Route, Routes, redirect, useRoutes } from "react-router-dom";
import Home from "./pages";
import Team from "./pages/team";
import Project from "./pages/project";
import FAQ from "./pages/faq";
import Payment from "./pages/payment";
import Coin from "./pages/coin";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ResetPassword from "./pages/reset-password";
import Page404 from "./pages/404";
import Profile from "./pages/profile";
import MyCourse from "./pages/profile/course";
import ProfileLayout from "./layouts/ProfileLayout";
import MyPayment from "./pages/profile/payment";
import MyCoin from "./pages/profile/coin";
import MyProject from "./pages/profile/project";
import Recent from "./pages/profile/recent";
import MainLayout from "./layouts/MainLayout";
import { PATH } from "./config/path";
import Course from "./pages/course";
import RegisterPage from "./pages/register/[slug]-id[id]";
import CourseDetail from "./pages/course/[slug]-id[id]";
import { useEffect, useState } from "react";
import PrivateRouter from "./components/PrivateRouter";
import AuthRouter from "./components/AuthRouter";
import routers from "./routers";
import "./assets/custom.css";

function App() {
  const [user, setUser] = useState(() => {
    try {
      JSON.parse(localStorage.getItem("user"));
    } catch (error) {
      return null;
    }
  });
  const login = () => {
    setUser({
      name: "Phan NGoc LinH Duy",
      avatar: "/img/avt.png",
    });
  };

  const logout = () => {
    setUser();
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const element = useRoutes(routers(user, login, logout));
  return (
    <>
      {element}
      {/* <Routes>
        <Route element={<MainLayout user={user} logout={logout} />}>
          <Route index element={<Home />} />
          <Route path={PATH.contact} element={<ContactPage />} />
          <Route path={PATH.course}>
            <Route index element={<Course />} />
            <Route path={PATH.courseDetail} element={<CourseDetail />} />
          </Route>

          <Route path={PATH.team} element={<Team />} />
          <Route path={PATH.courseRegister} element={<RegisterPage />} />
          <Route path={PATH.project} element={<Project />} />
          <Route path={PATH.faq} element={<FAQ />} />
          <Route path={PATH.payment} element={<Payment />} />
          <Route path={PATH.coin} element={<Coin />} />
          <Route
            element={<AuthRouter redirect={PATH.profile.index} user={user} />}
          >
            <Route path={PATH.signin} element={<Signin login={login} />} />
            <Route path={PATH.signup} element={<Signup />} />
            <Route path={PATH.resetPassword} element={<ResetPassword />} />
          </Route>

          <Route element={<PrivateRouter redirect={PATH.signin} user={user} />}>
            <Route
              path={PATH.profile.index}
              element={<ProfileLayout user={user} />}
            >
              <Route index element={<Profile />} />
              <Route path={PATH.profile.course} element={<MyCourse />} />
              <Route path={PATH.profile.payment} element={<MyPayment />} />
              <Route path={PATH.profile.coin} element={<MyCoin />} />
              <Route path={PATH.profile.project} element={<MyProject />} />
              <Route path={PATH.profile.recent} element={<Recent />} />
            </Route>
          </Route>

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
