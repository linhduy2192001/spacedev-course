import React from "react";
import { Navigate, useNavigate } from "react-router";
import { PATH } from "../config/path";
import { useForm } from "../hooks/useForm";
import { confirm, minmax, regexp, require } from "../utils/validate";
import { useAuth } from "../components/AuthContext";
import Input from "../components/Input/input";

export default function Signin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { values, register, validate, errors } = useForm({
    // name: [require()],
    password: [require()],
    username: [require(), regexp("email")],
  });

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (validate()) {
      login(values);
      navigate(PATH.profile.index);
    }
  };

  return (
    <main id="main">
      <div className="auth">
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login">
            <h2 className="title">Đăng nhập</h2>
            <Input
              className="mb-5"
              {...register("username")}
              placeholder="Email / Số điện thoại"
            />
            <Input
              className="mb-5"
              type="password"
              placeholder="Mật khẩu"
              {...register("password")}
            />
            {/* <input type="text" placeholder="Email / Số điện thoại" />
            <input type="password" placeholder="Mật khẩu" /> */}
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="./reset-password.html" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <button onClick={onSubmit} className="btn rect main btn-login">
              đăng nhập
            </button>
            <div className="text-register">
              <span>Nếu bạn chưa có tài khoản?</span>{" "}
              <a className="link" href="./signup.html">
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
