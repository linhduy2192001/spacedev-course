import React, { useState } from "react";
import Field from "../../components/Field";
import { validate, require, regexp } from "../../utils/validate";
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router";
import { courseService } from "../../services/course.services";
import { currency } from "../../utils/currency";
import { useFetch } from "../../hooks/useFetch";

export default function RegisterPage() {
  const { id } = useParams();
  // const [detail, setDetail] = useState(() => {
  //   return courseService.getDetailCourse(parseInt(id));
  // });
  const { data, loading } = useFetch(() => courseService.getDetailCourse(id));
  // let [form, setForm] = useState({});
  // const [error, setError] = useState({});
  const { validate, register, values } = useForm({
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
  });
  const [isSuccess, setIsSucess] = useState(false);

  if (loading) return null;
  let { data: detail } = data;

  const onSubmit = () => {
    // setError(errorObject);
    if (validate()) {
      setIsSucess(true);
      console.log("Validate success");
    } else {
      console.log("Validate error");
    }
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
          <a href="/" className="btn main rect">
            về trang chủ
          </a>
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
                    {...register("coin")}
                    renderInput={(props) => (
                      <div className="checkcontainer">
                        Hiện có <strong>300 COIN</strong>
                        {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                        {/* Cần ít nhất 200 COIN để giảm giá */}
                        <input type="checkbox" {...props} />
                        <span className="checkmark" />
                      </div>
                    )}
                  />
                  <Field
                    label="Hình thức thanh toán"
                    placeholder="Nội dung"
                    {...register("payment")}
                    renderInput={(props) => (
                      <div className="select">
                        <div className="head">Chuyển khoản</div>
                        <div className="sub">
                          <a href="#">Chuyển khoản</a>
                          <a href="#">Thanh toán tiền mặt</a>
                        </div>
                      </div>
                    )}
                  />
                  <Field
                    label="Ý kiến cá nhân"
                    placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                    {...register("note")}
                  />
                  <button onClick={onSubmit} className="btn main rect">
                    đăng ký
                  </button>
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
