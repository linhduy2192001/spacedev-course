import React, { useState } from "react";
import { useAsync } from "../hooks/useAsync";
import { userService } from "../services/user.services";
import { useForm } from "../hooks/useForm";
import { confirm, regexp, require } from "../utils/validate";
import Input from "../components/Input/input";
import Button from "../components/Button";
import { handleError } from "../utils/handleError";
import { useSearchParams } from "react-router-dom";
import { message } from "antd";
import { setToken } from "../utils/token";
import { useAuth } from "../components/AuthContext";

export default function ResetPassword() {
  const [search] = useSearchParams();

  const { getProfile } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);
  const code = search.get("code");

  const {
    excute: sendEmailResetPasswordService,
    loading: sendEmailResetPasswordLoading,
  } = useAsync(userService.sendEmailResetPassword);
  const {
    excute: resetPasswordByCodeService,
    loading: resetPasswordByCodeLoading,
  } = useAsync(userService.resetPasswordByCode);

  const resetPasswordForm = useForm({
    password: [require()],
    confirmPassword: [require(), confirm("password")],
  });

  const sentEmailForm = useForm({
    username: [require(), regexp("email")],
  });

  const onSendEmail = async () => {
    try {
      if (sentEmailForm.validate()) {
        const res = await sendEmailResetPasswordService(sentEmailForm.values);
        message.success(res.message);
        setIsSuccess(true);
      }
    } catch (err) {
      handleError(err);
    }
  };
  const onResetPassword = async () => {
    try {
      if (resetPasswordForm.validate()) {
        const res = await resetPasswordByCodeService({
          password: resetPasswordForm.values.password,
          code,
        });
        setToken(res.data);
        getProfile();
      }
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <main id="main">
      <div className="auth">
        {code ? (
          <div className="wrap">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <Input
              type="password"
              placeholder="Mật khẩu"
              {...resetPasswordForm.register("password")}
            />
            <Input
              type="password"
              className="mb-5"
              placeholder="Nhập lại mật khẩu"
              {...resetPasswordForm.register("confirmPassword")}
            />
            <Button
              onClick={onResetPassword}
              loading={resetPasswordByCodeLoading}
            >
              Đặt lại mật khẩu
            </Button>
          </div>
        ) : isSuccess ? (
          <div>
            <h1>Gửi email lấy lại mật khẩu thành công</h1>
            <p>
              Chúng tôi đã gửi cho bạn email để lấy lại mật khẩu, vui lòng kiểm
              tra email
            </p>
          </div>
        ) : (
          <div className="wrap">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <Input
              placeholder="Email"
              {...sentEmailForm.register("username")}
            />
            <Button
              onClick={onSendEmail}
              loading={sendEmailResetPasswordLoading}
            >
              Đặt lại mật khẩu
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
