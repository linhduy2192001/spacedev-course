import PrivateRouter from "../components/PrivateRouter";
import { PATH } from "../config/path";
import ProfileLayout from "../layouts/ProfileLayout";
import Profile from "../pages/profile";
import MyCoin from "../pages/profile/coin";
import MyCourse from "../pages/profile/course";
import MyPayment from "../pages/profile/payment";
import MyProject from "../pages/profile/project";
import Recent from "../pages/profile/recent";

export const profile = (user) => {
  return {
    element: <PrivateRouter user={user} redirect={PATH.signin} />,
    children: [
      {
        element: <ProfileLayout user={user} redirect={PATH.profile.index} />,
        children: [
          {
            element: <Profile />,
            index: true,
          },
          {
            element: <MyCourse />,
            path: PATH.profile.course,
          },
          {
            element: <MyPayment />,
            path: PATH.profile.payment,
          },
          {
            element: <MyCoin />,
            path: PATH.profile.coin,
          },
          {
            element: <MyProject />,
            path: PATH.profile.project,
          },
          {
            element: <Recent />,
            path: PATH.profile.recent,
          },
        ],
      },
    ],
  };
};
