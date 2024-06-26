import React, { useEffect } from "react";

export default function Slider() {
  useEffect(() => {
    $(".slider").flickity({
      contain: true,
      wrapAround: false,
      autoPlay: true,
      // freeScroll: true,
      cellAlign: "left",
      prevNextButtons: false,
    });

    function jarallax() {
      $(".jarallax").jarallax({
        speed: 0.7,
      });
    }
    jarallax();
  }, []);
  return (
    <div className="slider">
      <div className="item">
        <div className="container">
          <div className="content">
            <h2 className="title">
              Điều quan trọng không phải là{" "}
              <span style={{ color: "rgb(229, 57, 53)" }}>vị trí đứng</span> mà
              là <span style={{ color: "rgb(63, 81, 181)" }}>hướng đi</span>
            </h2>
            <a href="https://spacedev.vn/roadmap" className="btn main round">
              Roadmap
            </a>
          </div>
        </div>
        <div className="jarallax-img">
          <img src="img/banner1.jpg" alt="" />
        </div>
      </div>
      <div className="item">
        <div className="container">
          <div className="content">
            <h2 className="title">Kiến thức</h2>
            <h2 className="title">mở ra trang mới cuộc đời bạn</h2>
            <a href="https://spacedev.vn" className="btn main round">
              KHÓA HỌC
            </a>
          </div>
        </div>
        <div className="jarallax-img">
          <img src="img/banner2.jpg" alt="" />
        </div>
      </div>
      <div className="item">
        <div className="container">
          <div className="content">
            <h2 className="title">Chuyên nghiệp</h2>
            <h2 className="title">làm cho bạn khác biệt</h2>
            <a href="https://spacedev.vn/about" className="btn main round">
              KHÓA HỌC
            </a>
          </div>
        </div>
        <div className="jarallax-img">
          <img src="img/banner3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
