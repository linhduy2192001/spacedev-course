import { routers } from "./routers";
import "./assets/custom.css";
import { useRoutes } from "react-router-dom";

function App() {
  // const [user, setUser] = useState(() => {
  //   try {
  //     JSON.parse(localStorage.getItem("user"));
  //   } catch (error) {
  //     return null;
  //   }
  // });
  // const login = () => {
  //   setUser({
  //     name: "Phan NGoc LinH Duy",
  //     avatar: "/img/avt.png",
  //   });
  // };

  // const logout = () => {
  //   setUser();
  // };

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  const element = useRoutes(routers);
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
