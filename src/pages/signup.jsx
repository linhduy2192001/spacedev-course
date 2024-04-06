import React, { useState } from "react";
import { useAsync } from "../hooks/useAsync";
import { userService } from "../services/user.services";
import Button from "../components/Button";
import { useForm } from "../hooks/useForm";
import { confirm, minmax, regexp, require } from "../utils/validate";
import styled from "styled-components";
import { message } from "antd";
import Input from "../components/Input/input";
import { LoadingOutlined } from "@ant-design/icons";
import classNames from "classnames";

const ErrorText = styled.p`
  color: red;
`;

export default function Signup() {
  const { loading: resendEmailLoading, excute: resendEmailService } = useAsync(
    userService.resendEmail
  );
  const { excute: signupSerivce, loading } = useAsync(userService.signup);
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  const { values, validate, register, errors } = useForm({
    name: [require()],
    password: [require(), minmax(6, 32)],
    username: [require(), regexp("email")],
    confirmPassword: [require(), confirm("")],
  });

  const onSubmit = async () => {
    try {
      if (validate()) {
        const res = await signupSerivce(values);
        setIsSignupSuccess(true);
      }
    } catch (err) {
      console.log("err", err);
      if (err?.response?.data?.message) {
        message.error(err.response.data.message);
      }
    }
  };

  const onResendEmail = async (ev) => {
    ev.preventDefault();
    try {
      await resendEmailService({
        username: values.username,
      });
      message.success("Email kích hoạt đã được gửi lại thành công ");
    } catch (err) {
      console.log("err", err);
      if (err?.response?.data?.message) {
        message.error(err.response.data.message);
      }
    }
  };

  return (
    <main id="main" className="auth">
      {isSignupSuccess ? (
        <div className="container flex-col gap-10 text-center wrap">
          <h1 className="text-2xl">Đăng kí tài khoản thành công</h1>
          <p>
            Vui lòng kiểm tra email để kích hoạt. Nếu bạn không nhận được email,
            vui lòng bấm{" "}
            <span className="font-bold">"Gửi lại email kích hoạt"</span> bên
            dưới
          </p>
          <div>
            <a
              onClick={onResendEmail}
              href="#"
              className={classNames("flex gap-2 link text-center", {
                "opacity-50 pointer-events-none": resendEmailLoading,
              })}
            >
              {resendEmailLoading && <LoadingOutlined />}
              Gửi lại email
            </a>
          </div>
        </div>
      ) : (
        <div>
          <div className="wrap">
            <h2 className="title">Đăng ký</h2>
            <Input
              className="mb-5"
              type="text"
              placeholder="Địa chỉ Email"
              {...register("username")}
            />

            <Input
              className="mb-5"
              placeholder="Họ và tên"
              {...register("name")}
            />
            <Input
              className="mb-5"
              type="password"
              placeholder="Mật khẩu"
              {...register("password")}
            />

            <Input
              className="mb-5"
              type="password"
              placeholder="Nhập lại mật khẩu"
              {...register("confirmPassword")}
            />

            <p className="policy">
              Bằng việc đăng kí, bạn đã đồng ý{" "}
              <a href="#">Điều khoản bảo mật</a> của Spacedev
            </p>
            {/* <button className="btn rect main btn-login">Đăng ký</button> */}
            <Button onClick={onSubmit} className="btn-login" loading={loading}>
              Đăng ký
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
