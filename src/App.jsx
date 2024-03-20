import ContactPage from "./pages/contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterPage from "./pages/register";
import { Route, Routes } from "react-router-dom";
import Course from "./pages/course";
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

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/course" element={<Course />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="/profile/course" element={<MyCourse />} />
            <Route path="/profile/payment" element={<MyPayment />} />
            <Route path="/profile/coin" element={<MyCoin />} />
            <Route path="/profile/project" element={<MyProject />} />
            <Route path="/profile/recent" element={<Recent />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      {/* <ContactPage /> */}
    </>
  );
}

export default App;
