import React from "react";
import { userService } from "../../services/user.services";
import { useAsync } from "../../hooks/useAsync";
import { useForm } from "../../hooks/useForm";
import { useAuth } from "../../components/AuthContext";
import { regexp, require } from "../../utils/validate";
import Field from "../../components/Field";
import Button from "../../components/Button";
import { handleError } from "../../utils/handleError";
import { message } from "antd";

export default function Profile() {
  const { user, setUser } = useAuth();
  const { loading, excute: updateInfoService } = useAsync(
    userService.updateInfo
  );

  const { register, validate, values } = useForm(
    {
      name: [require()],
      phone: [require(), regexp("phone")],
      fb: [require(), regexp("url")],
    },
    user
  );
  const onSubmmit = async () => {
    try {
      if (validate()) {
        const res = await updateInfoService(values);
        setUser(res.data);
        message.success("Bạn đã cập nhật thông tin thành công!");
      }
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <div className="tab1">
      <Field
        {...register("name")}
        placeholder="Nguyễn Văn A"
        label="Họ và tên"
        required
      />
      <Field
        {...register("phone")}
        placeholder="0949******"
        label=" Số điện thoại"
        required
      />
      <Field {...register("username")} disabled label="Email" />
      <Field {...register("fb")} label="Facebook url" required />
      <Button loading={loading} className="btn main rect" onClick={onSubmmit}>
        LƯU LẠI
      </Button>
    </div>
  );
}
