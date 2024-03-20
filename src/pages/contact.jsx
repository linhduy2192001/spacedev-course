import React, { useState } from "react";
import Field from "../components/Field";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { validate, require, regexp } from "../utils/validate";
import { useForm } from "../hooks/useForm";

export default function ContactPage() {
  // let [form, setForm] = useState({});
  // const [error, setError] = useState({});

  const { validate, register } = useForm({
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
    website: [
      regexp("url", "Xin vui lòng điền đúng định dạng website"),
      // { required: true },
      // {
      //   regexp:
      //     /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
      //   message: "Xin vui lòng nhập đúng website facebook của bạn",
      // },
    ],
    title: [require()],
    content: [require()],
  });
  const onSubmit = (ev) => {
    ev.preventDefault();
    // const errorObject = validate({}, form);

    // if (!form.name?.trim()) {
    //   errorObject.name = "Please fill in this field";
    // }

    // if (!form.phone?.trim()) {
    //   errorObject.phone = "Please fill in this field";
    // } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
    //   errorObject.phone = "Please enter phone number";
    // }
    // if (!form.email?.trim()) {
    //   errorObject.email = "Please fill in this field";
    // } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
    //   errorObject.email = "Please enter email address";
    // }

    // if (
    //   form.website &&
    //   !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
    //     form.website
    //   )
    // ) {
    //   errorObject.website = "Please enter URL address";
    // }
    // if (!form.title?.trim()) {
    //   errorObject.title = "Please fill in this field";
    // }

    // if (!form.content?.trim()) {
    //   errorObject.content = "Please fill in this field";
    // }

    // setError(errorObject);

    if (validate()) {
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
      <Header />
      <main id="main">
        <div className="register-course">
          <section className="section-1 wrap container">
            {/* <div class="main-sub-title">liên hệ</div> */}
            <h2 className="main-title">HỢP TÁC CÙNG Spacedev</h2>
            <p className="top-des">
              Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau
              tạo ra những sản phẩm giá trị, cũng như việc hợp tác với các đối
              tác tuyển dụng và công ty trong và ngoài nước.
            </p>
            <form className="form" onSubmit={onSubmit}>
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
                label="Website"
                placeholder="Website"
                {...register("website")}
              />
              <Field
                label="Tiêu đề"
                placeholder="Tiêu đề"
                required
                {...register("title")}
              />
              <Field
                label="Nội dung"
                placeholder="Nội dung"
                required
                {...register("content")}
                renderInput={(props) => (
                  <textarea
                    {...props}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                )}
              />
              <button className="btn main rect">đăng ký</button>
            </form>
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
        </div>
      </main>
      {/* popup video homepage */}
      <div className="popup-video" style={{ display: "none" }}>
        <div className="wrap">
          <div className="video-src" />
        </div>
        <div className="close" />
      </div>
      <div className="popup-form popup-login" style={{ display: "none" }}>
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login" style={{ display: "block" }}>
            <h2 className="title">Đăng nhập</h2>
            <input type="text" placeholder="Email / Số điện thoại" />
            <input type="password" placeholder="Mật khẩu" />
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="#" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <div className="btn rect main btn-login">đăng nhập</div>
            <div className="text-register" style={{}}>
              <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
              <div className="btn btn-icon rect white btn-google">
                <img src="img/google.svg" alt="" />
                Google
              </div>
            </div>
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
          {/* email form */}
          <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="popup-form popup-login" style={{ display: "none" }}>
        <div className="wrap">
          <h2 className="title">Đăng ký</h2>
          <div className="btn btn-icon rect white btn-google">
            <img src="img/google.svg" alt="" />
            Google
          </div>
          <p className="policy">
            Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a>{" "}
            của Spacedev
          </p>
          <div className="close">
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
