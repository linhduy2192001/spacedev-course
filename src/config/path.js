const PROFILE_PATH = "/profile";
const COURSE_PATH = "/course";

export const PATH = {
  home: "/",
  team: "/team",
  course: COURSE_PATH,
  courseDetail: COURSE_PATH + "/:slug-id:id",
  courseRegister: "/register/:slug-id:id",
  project: "/project",
  coin: "/coin",
  payment: "/payment",
  contact: "/contact",
  faq: "/faq",
  signin: "/signin",
  signup: "/signup",
  resetPassword: "/reset-password",
  profile: {
    index: PROFILE_PATH,
    course: PROFILE_PATH + "/course",
    payment: PROFILE_PATH + "/payment",
    coin: PROFILE_PATH + "/coin",
    project: PROFILE_PATH + "/project",
    recent: PROFILE_PATH + "/project",
  },
};
