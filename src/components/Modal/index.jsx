import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ mashClosable, visible, onCancel, children }) {
  const onMaskClick = () => {
    if (mashClosable) onCancel?.();
  };
  if (!visible) return null;
  return createPortal(
    <div className="popup-video" onClick={onMaskClick}>
      <div className="wrap">{children}</div>
      <div className="close" onClick={onCancel} />
    </div>,
    document.body
  );
}
