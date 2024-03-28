import { useAuth } from "../components/AuthContext";
import AuthRouter from "../components/AuthRouter";
import PrivateRouter from "../components/PrivateRouter";
import { PATH } from "../config/path";
import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import Home from "../pages";
import Page404 from "../pages/404";
import Coin from "../pages/coin";
import ContactPage from "../pages/contact";
import Course from "../pages/course";
import CourseDetail from "../pages/course/[slug]-id[id]";
import Demo from "../pages/demo";
import FAQ from "../pages/faq";
import Payment from "../pages/payment";
import Profile from "../pages/profile";
import MyCoin from "../pages/profile/coin";
import MyCourse from "../pages/profile/course";
import MyPayment from "../pages/profile/payment";
import MyProject from "../pages/profile/project";
import Recent from "../pages/profile/recent";
import Project from "../pages/project";
import RegisterPage from "../pages/register/[slug]-id[id]";
import ResetPassword from "../pages/reset-password";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Team from "../pages/team";
import { profile } from "./profile";

export const routers = [
  {
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Demo />,
        path: "/demo",
      },
      {
        element: <ContactPage />,
        path: PATH.contact,
      },
      {
        path: PATH.course,
        children: [
          {
            element: <Course />,
            index: true,
          },
          {
            element: <CourseDetail />,
            path: PATH.courseDetail,
          },
        ],
      },
      {
        element: <Team />,
        path: PATH.team,
      },
      {
        element: <RegisterPage />,
        path: PATH.courseRegister,
      },
      {
        element: <Project />,
        path: PATH.project,
      },
      {
        element: <FAQ />,
        path: PATH.faq,
      },
      {
        element: <Payment />,
        path: PATH.payment,
      },
      {
        element: <Coin />,
        path: PATH.coin,
      },
      {
        element: <AuthRouter redirect={PATH.profile.index} />,
        children: [
          {
            element: <Signin />,
            path: PATH.signin,
          },
          {
            element: <Signup />,
            path: PATH.signup,
          },
          {
            element: <ResetPassword />,
            path: PATH.resetPassword,
          },
        ],
      },
      profile(),
      {
        element: <Page404 />,
        path: "*",
      },
    ],
  },
];
