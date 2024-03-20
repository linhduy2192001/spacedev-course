import React from "react";

export default function Course() {
  return (
    <main id="main">
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">KHÓA HỌC SPACEDEV</h2>
          <p className="top-des">
            Cho dù bạn muốn tìm kiếm công việc, khởi nghiệp, phát triển hoạt
            động kinh doanh hay chỉ đơn giản là muốn khám phá thế giới, hãy chọn
            lộ trình học tập mà bạn muốn và bắt đầu câu chuyện thành công của
            bạn.
          </p>
          <div className="textbox" style={{ marginTop: "100px" }}>
            <h3 className="sub-title">KHÓA HỌC</h3>
            <h2 className="main-title">OFFLINE</h2>
          </div>
          <div className="flex justify-between items-center mt-10 mb-10">
            <div className="category">
              <a href="#" className="item active">
                Cất cả
              </a>
              <a href="#" className="item">
                Frontend
              </a>
              <a href="#" className="item">
                Backend
              </a>
              <a href="#" className="item">
                UI/UX
              </a>
              <a href="#" className="item">
                Devops
              </a>
            </div>
            <div className="flex">
              <div className="input-search">
                <input defaultValue="Reactjs" />
                <button>Tìm kiếm</button>
              </div>
            </div>
          </div>
          <div className="list row">
            <div className="col-md-4 course">
              <div className="wrap">
                <a className="cover" href="./course-detail.html">
                  <img src="./img/img1.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="./course-detail.html">
                    Reactjs Advanced
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <a href="/register.html" className="register-btn">
                    6,000,000 đ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="./course-detail.html" className="cover">
                  <img src="./img/img.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="./course-detail.html">
                    React JS
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <a href="/register.html" className="register-btn">
                    6,000,000 đ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="./course-detail.html" className="cover">
                  <img src="./img/img2.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="./course-detail.html">
                    Devops
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <a href="/register.html" className="register-btn">
                    6,000,000 đ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="./course-detail.html" className="cover">
                  <img src="./img/img3.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="./course-detail.html">
                    Lập trình Nodejs
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <a href="/register.html" className="register-btn">
                    6,000,000 đ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="./course-detail.html" className="cover">
                  <img src="./img/img4.png" alt="" />
                </a>
                <div className="info">
                  <a href="./course-detail.html" className="name">
                    HTML, CSS, JS Cơ bản
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <a href="/register.html" className="register-btn">
                    6,000,000 đ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="./course-detail.html" className="cover">
                  <img src="./img/img5.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="./course-detail.html">
                    Web Responsive
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <a href="/register.html" className="register-btn">
                    6,000,000 đ
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <div className="paginate">
              <a href="#" className="prev">
                Trang trước
              </a>
              <a href="#" className="item">
                1
              </a>
              <a href="#" className="item">
                2
              </a>
              <a href="#" className="item active">
                3
              </a>
              <a href="#" className="item">
                4
              </a>
              <a href="#" className="item">
                5
              </a>
              <a href="#" className="next">
                Trang sau
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
