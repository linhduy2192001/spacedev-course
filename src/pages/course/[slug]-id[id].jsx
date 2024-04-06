import React, { useState } from "react";
import { Link, generatePath, useParams } from "react-router-dom";
import { courseService } from "../../services/course.services";
import { PATH } from "../../config/path";
import { useScrollTop } from "../../hooks/useScrollTop";
import { currency } from "../../utils/currency";
import { useFetch } from "../../hooks/useFetch";
import CourseCards from "../../components/CourseCard";
import Skeleton from "../../components/Skeleton";
import { Accordion } from "../../components/Accordion";
import moment from "moment";

export default function CourseDetail() {
  const { id } = useParams();
  const { data, loading } = useFetch(
    () => courseService.getDetailCourse(id),
    [id]
  );
  const { data: related } = useFetch(
    () => courseService.getRelativeCourse(id),
    [id]
  );

  useScrollTop([id]);

  // const [detail, setDetail] = useState(() =>
  //   courseService.getDetailCourse(parseInt(id))
  // );

  if (loading) {
    return (
      <main className="course-detail " id="main">
        {" "}
        <section
          className="banner style2"
          style={{ "--background": "#cde6fb" }}
        >
          <div className="container">
            <div className="info">
              <h1>
                <Skeleton width={500} height={64} />
              </h1>
              <div className="row">
                <div className="date">
                  <Skeleton width={200} height={24} />
                </div>
                <div className="time">
                  <Skeleton width={200} height={24} />
                </div>
              </div>
              <Skeleton width={150} style={{ marginTop: 40 }} height={46} />
            </div>
          </div>
        </section>
      </main>
    );
  }

  const { data: detail } = data;

  if (!detail) return <div style={{ margin: "100px 0" }}>...Not Found...</div>;

  const registerPath = generatePath(PATH.courseRegister, {
    slug: detail.slug,
    id: detail.id,
  });

  return (
    <main id="main">
      <div className="course-detail">
        <section
          className="banner style2"
          style={{ "--background": detail.template_color_banner }}
        >
          <div className="container">
            <div className="info">
              <h1>{detail.title}</h1>
              <div className="row">
                <div className="date">
                  <strong>Khai giảng:</strong>{" "}
                  {moment(detail.opening_time).format("DD/MM/YYYY")}
                </div>
                <div className="time">
                  <strong>Thời lượng:</strong> {detail.count_video} buổi
                </div>
              </div>
              <Link
                className="btn white round"
                style={{
                  "--colorBtn": detail.template_color_btn || "#70b6f1",
                }}
                to={registerPath}
              >
                đăng ký
              </Link>
            </div>
          </div>
          <div className="bottom">
            <div className="container">
              <div className="video">
                <div className="icon">
                  <img src="/img/play-icon-white.png" alt="" />
                </div>{" "}
                <span>giới thiệu</span>
              </div>
              <div className="money">{currency(detail.money)} VND</div>
            </div>
          </div>
        </section>
        <section className="section-2">
          <div className="container">
            <p className="des">{detail.long_description}</p>
            <h2 className="title">giới thiệu về khóa học</h2>
            <div className="cover">
              <img src="/img/course-detail-img.png" alt="" />
            </div>
            <h3 className="title">nội dung khóa học</h3>
            <Accordion.Group>
              {detail.content.map((e, i) => (
                <Accordion date={i + 1} {...e}>
                  {e.content}
                </Accordion>
              ))}
            </Accordion.Group>

            <h3 className="title">yêu cầu cần có</h3>
            <div className="row row-check">
              {detail.required.map((e, i) => (
                <div key={i} className="col-md-6">
                  {e.content}
                </div>
              ))}
            </div>
            <h3 className="title">hình thức học</h3>
            <div className="row row-check">
              {detail.content.map((e, i) => (
                <div key={i} className="col-md-6">
                  {e.title}
                </div>
              ))}
            </div>
            <h3 className="title">
              <div className="date-start">lịch học</div>
              <div className="sub">
                *Lịch học và thời gian có thể thống nhất lại theo số đông học
                viên.
              </div>
            </h3>
            <p>
              <strong>Ngày bắt đầu: </strong>{" "}
              {moment(detail.opening_time).format("DD/MM/YYYY")} <br />
              <strong>Thời gian học: </strong> {detail.schedule}
            </p>
            <h3 className="title">Người dạy</h3>
            <div className="teaches">
              <div className="teacher">
                <div className="avatar">
                  <img src="/img/avt.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">Đặng Thuyền Vương</div>
                  <div className="title">
                    Founder Spacedev &amp; Fullstack developer
                  </div>
                  <p className="intro">
                    My education, career, and even personal life have been
                    molded by one simple principle; well designed information
                    resonates with people and can change lives.I have a passion
                    for making information resonate. It all starts with how
                    people think. With how humans work. As humans we have
                    learned how to read and write and while that is incredible,
                    we are also already hard-wired to do some things a bit more
                    "automatically"
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a href="#">https://dangthuyenvuong.github.io/</a>
                  </p>
                </div>
              </div>
            </div>
            <h3 className="title">Người hướng dẫn</h3>
            <div className="teaches">
              <div className="teacher">
                <div className="avatar">
                  <img src="/img/avt.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">Đặng Thuyền Vương</div>
                  <div className="title">
                    Founder Spacedev &amp; Fullstack developer
                  </div>
                  <p className="intro">
                    My education, career, and even personal life have been
                    molded by one simple principle; well designed information
                    resonates with people and can change lives.I have a passion
                    for making information resonate. It all starts with how
                    people think. With how humans work. As humans we have
                    learned how to read and write and while that is incredible,
                    we are also already hard-wired to do some things a bit more
                    "automatically"
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a href="#">https://dangthuyenvuong.github.io/</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="user">
                <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
              </div>
              <div className="btn main btn-register round">đăng ký</div>
              <div className="btn-share btn overlay round btn-icon">
                <img src="/img/facebook.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="section-4">
          <div className="container">
            <div className="textbox">
              <h3 className="sub-title">Khóa học</h3>
              <h2 className="main-title">Liên quan</h2>
            </div>
            <div className="list row">
              {related &&
                related?.data.map((e) => <CourseCards key={e.id} {...e} />)}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
