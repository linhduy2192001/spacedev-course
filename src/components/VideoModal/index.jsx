import React from "react";
import { createPortal } from "react-dom";

export default function VideoModal({ mashClosable, visible, onCancel }) {
  const onMaskClick = () => {
    if (mashClosable) onCancel?.();
  };
  if (!visible) return null;
  return createPortal(
    <div className="popup-video" onClick={onMaskClick}>
      <div className="wrap">
        <iframe
          width="800px"
          height="450px"
          src="https://www.youtube.com/embed/UVa71QARdyw?si=uUNsgBscO7UI65Al"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="close" onClick={onCancel} />
    </div>,
    document.body
  );
}
