import React, { useEffect } from "react";

export default function Jarallax() {
  useEffect(() => {
    function jarallax() {
      $(".jarallax").jarallax({
        speed: 0.7,
      });
    }
    jarallax();
  }, []);
  return (
    <div className="jarallax-img">
      <img src="/img/banner1.jpg" alt="" />
    </div>
  );
}
