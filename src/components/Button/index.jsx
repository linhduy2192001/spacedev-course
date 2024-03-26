import React from "react";
import { ButtonStyle } from "./style";
import { LoadingOutlined } from "@ant-design/icons";

export default function Button({ loading, children, ...props }) {
  return (
    <ButtonStyle
      {...props}
      disabled={loading}
      className={`gap-3 btn main rect ${props.className ?? ""}`}
    >
      {loading && <LoadingOutlined style={{ fontSize: 20 }} />}
      {children}
    </ButtonStyle>
  );
}
