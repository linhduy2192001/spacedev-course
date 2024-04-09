import React, { useEffect, useState } from "react";
import Field from "../../components/Field";
import { validate, require, regexp } from "../../utils/validate";
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router";
import { courseService } from "../../services/course.services";
import { currency } from "../../utils/currency";
import { useFetch } from "../../hooks/useFetch";
import Select from "../../components/Select";
import CheckBox from "../../components/CheckBox";
import { useAuth } from "../../components/AuthContext";
import { message } from "antd";
import Button from "../../components/Button";
import { PATH } from "../../config/path";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useLocale } from "antd/es/locale";
import { useAsync } from "../../hooks/useAsync";
export default function RegisterPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { id } = useParams();
  // const [detail, setDetail] = useState(() => {
  //   return courseService.getDetailCourse(parseInt(id));
  // });
  const { data, loading } = useFetch(() => courseService.getDetailCourse(id));
  const { loading: registerLoading, excute: courseRegisterService } = useAsync(
    courseService.register
  );

  useEffect(() => {
    if (!user) {
      message.warning("Vui lòng đăng nhập!");
      navigate(PATH.signin, { state: { redirect: pathname } });
    }
  }, [user]);
  // let [form, setForm] = useState({});
  // const [error, setError] = useState({});
  const { validate, register, values } = useForm(
    {
      name: [require("Xin vui lòng nhập họ và tên")],
      // { required: true, message: "Xin vui lòng nhập họ và tên" },

      email: [
        require(),
        regexp("email", "Xin vui lòng nhập đúng định dạng email"),
        // { required: true },
        // {
        //   regexp: "email",
        // },
      ],
      phone: [
        require(),
        regexp("phone", "Xin vui lòng nhập đúng định dạng số điện thoại"),
        // { required: true },
        // {
        //   regexp: "phone",
        // },
      ],
      fb: [
        require(),
        regexp(
          /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/
        ),
        // { required: true },
        // {
        //   regexp:
        //     /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
        //   message: "Xin vui lòng nhập đúng website facebook của bạn",
        // },
      ],
      payment: [require()],
    },
    {
      email: user.username,
      name: user.name,
      fb: user.fb,
      phone: user.phone,
    }
  );
  const [isSuccess, setIsSucess] = useState(false);

  if (loading) return null;
  let { data: detail } = data;

  const onSubmit = async () => {
    try {
      if (validate()) {
        await courseRegisterService(id, values);
        setIsSucess(true);
      }
    } catch (error) {
      console.log("error", error);
    }
    // setError(errorObject);
  };

  // const register = (name) => {
  //   return {
  //     error: error[name],
  //     value: form[name] || "",
  //     onChange: (ev) => setForm({ ...form, [name]: ev.target.value }),
  //   };
  // };
  return (
    <>
      {isSuccess ? (
        <div className="register-success">
          <div className="contain">
            <div className="main-title">đăng ký thành công</div>
            <p>
              <strong>
                Chào mừng {values.name} đã trở thành thành viên mới của Spacedev
                Team.
              </strong>{" "}
              <br />
              Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>,
              chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook hoặc số
              điện thoại của bạn.
            </p>
          </div>
          <Link to={PATH.profile.course} className="btn main rect">
            về trang khoá học của tôi
          </Link>
        </div>
      ) : (
        <main id="main">
          <section className="register-course">
            <div className="container">
              <div className="container wrap">
                <div className="main-sub-title">ĐĂNG KÝ</div>
                <h1 className="main-title">{detail.title} </h1>
                <div className="main-info">
                  <div className="date">
                    <strong>Khai giảng:</strong> 15/11/2020
                  </div>
                  <div className="time">
                    <strong>Thời lượng:</strong> 18 buổi
                  </div>
                  <div className="time">
                    <strong>Học phí:</strong>
                    {currency(detail.money)} VND
                  </div>
                </div>
                <div className="form">
                  <Field
                    label="Họ và tên"
                    placeholder="Họ và tên"
                    required
                    {...register("name")}
                  />{" "}
                  <Field
                    label="Số điện thoại"
                    placeholder="Số điện thoại"
                    required
                    {...register("phone")}
                  />
                  <Field
                    label="Email"
                    placeholder="Email"
                    required
                    {...register("email")}
                  />
                  <Field
                    label="URL Facebook"
                    placeholder="URL Facebook"
                    {...register("fb")}
                  />
                  <Field
                    label="Sử dụng COIN"
                    placeholder="Sử dụng COIN"
                    renderInput={(props) => (
                      <CheckBox {...props}>
                        Hiện có <strong>300 COIN</strong>
                      </CheckBox>
                    )}
                  />
                  <Field
                    label="Hình thức thanh toán"
                    placeholder="Nội dung"
                    renderInput={(props) => (
                      <Select
                        {...register("payment")}
                        {...props}
                        placeholder="Hình thức thanh toán"
                        options={[
                          { value: "chuyen-khoan", label: "Chuyển khoản" },
                          {
                            value: "thanh-toan-tien mat",
                            label: "Thanh toán tiền mặt",
                          },
                        ]}
                      />
                    )}
                  />
                  <Field
                    label="Ý kiến cá nhân"
                    placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                    {...register("note")}
                  />
                  <Button
                    loading={registerLoading}
                    onClick={onSubmit}
                    className="btn main rect"
                  >
                    đăng ký
                  </Button>
                </div>
              </div>
            </div>
          </section>
          {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Vương Đặng đã trở thành thành viên mới của Spacedev Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
      )}
    </>
  );
}
