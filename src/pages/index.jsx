import React, { useEffect, useState } from "react";
import { useScrollTop } from "../hooks/useScrollTop";
import ListCourse from "../components/ListCourse";
import { courseService } from "../services/course.services";
import { useFetch } from "../hooks/useFetch";
import VideoModal from "../components/VideoModal";
import Modal from "../components/Modal";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [courses, setCourses] = useState([]);
  // useScrollTop();
  // useEffect(() => {
  //   setLoading(true);
  //   courseService
  //     .getCourse()
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCourses(data.data);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  const { data: courses, loading } = useFetch(() => courseService.getCourse());
  return (
    <main id="main">
      <div className="homepage">
        <div className="slider">
          <div className="item">
            <div className="container">
              <div className="content">
                <h2 className="title">
                  Điều quan trọng không phải là{" "}
                  <span style={{ color: "rgb(229, 57, 53)" }}>vị trí đứng</span>{" "}
                  mà là{" "}
                  <span style={{ color: "rgb(63, 81, 181)" }}>hướng đi</span>
                </h2>
                <a
                  href="https://spacedev.vn/roadmap"
                  className="btn main round"
                >
                  Roadmap
                </a>
              </div>
            </div>
            <div className="jarallax-img">
              <img src="/img/banner1.jpg" alt="" />
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
              <img src="/img/banner2.jpg" alt="" />
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
              <img src="/img/banner3.jpg" alt="" />
            </div>
          </div>
        </div>
        <ListCourse />
        <section className="section-different">
          <div className="container">
            <div className="row">
              <div className="titlebox col-md-6 col-sm-12 col-xs-12">
                <h2 className="main-title white textleft">
                  <span>Giá trị Cốt lỗi</span> <br /> tại Spacedev
                </h2>
                <div className="videodif" data-src="video/cfd-video-intro.mp4">
                  <img
                    src="https://svtech.com.vn/wp-content/uploads/2020/07/dexus-office-space.jpg"
                    alt=""
                  />
                  <div
                    className="play-btn btn-video-intro"
                    onClick={() => setIsOpenModal(true)}
                  >
                    <img src="img/play-icon.svg" alt="" />
                  </div>
                </div>
                <Modal
                  mashClosable
                  visible={isOpenModal}
                  onCancel={() => setIsOpenModal(false)}
                >
                  {" "}
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
                </Modal>
                <div className="item" style={{ marginTop: "35px" }}>
                  <h4>Sáng tạo và đơn giản</h4>
                  <p>
                    Spacedev đề cao những sáng tạo đơn giản thay đổi thế giới,
                    gia tăng năng suất và cải thiện cuộc sống.
                  </p>
                </div>
              </div>
              <div className="contentbox col-md-6 col-sm-12 col-xs-12">
                <div className="item">
                  <h4>Tập trung vào khách hàng</h4>
                  <p>
                    Spacedev được tạo ra với mục tiêu cao nhất giúp cho việc học
                    trở nên dễ dàng hơn và kiến thức thật sự ý nghĩa. Những học
                    viên là đối tượng phục vụ của spacedev vì thế những yêu cầu
                    chính đáng của học viên sẽ được nền tảng tiếp thu và cải
                    thiện.
                  </p>
                </div>
                <div className="item">
                  <h4>Gây dựng lòng tin</h4>
                  <p>
                    Spacedev luôn trung thực với những gì mình phát ngôn cũng
                    như công bố trên các nền tảng mạng xã hội. Trung thực và giữ
                    chữ tín với học viên, với đối tác và với những người sáng
                    lập luôn là tiêu chí hàng đầu giúp nền tảng phát triển bền
                    vững ở hiện tại và trong tương lai.
                  </p>
                </div>
                <div className="item">
                  <h4>Phát triển nhưng không dừng lại</h4>
                  <p>
                    Bằng việc áp dụng những công nghệ trên nền tảng và sự hoàn
                    thiện về chức năng là mình chứng rõ nhất cho sự chuyên
                    nghiệp cũng như sự tận tâm của những người sáng lập nền tảng
                    spacedev.vn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section class="section-3">
                <div class="container">
                    <div class="video">
                        <iframe id="video-intro"
                            src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen allowscriptaccess="always"></iframe>
    
                        <div class="video-src" data-src="video/Spacedev-video-intro.mp4"></div>
                        <div class="play-btn btn-video-intro">
                            <img src="img/play-video-btn.png" alt="">
                        </div>
                    </div>
                </div>
            </section> */}
        <Testimonial />
        <Gallery />
        <section className="section-action">
          <div className="container">
            <h3>Học thử trước khi đăng ký khóa học tại Spacedev?</h3>
            <div className="bg-white btn main round">Học thử</div>
          </div>
        </section>
      </div>
    </main>
  );
}
