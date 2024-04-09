import React, { useState } from "react";
import { Link, generatePath, useParams } from "react-router-dom";
import { courseService } from "../../services/course.services";
import { PATH } from "../../config/path";
import { useScrollTop } from "../../hooks/useScrollTop";
import { currency } from "../../utils/currency";
import { useFetch } from "../../hooks/useFetch";
import CourseCards from "../../components/CourseCard";
import Skeleton from "../../components/Skeleton";
import Page404 from "../404";
import { Accordion } from "../../components/Accordion";
import moment from "moment";
import Teacher from "../../components/Teacher";
import { Modal } from "antd";
import VideoModal from "../../components/VideoModal";

export default function CourseDetail() {
  const [isOpenModal, setIsOpenModal] = useState(false);
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

  if (!detail) return <Page404 />;

  const registerPath = generatePath(PATH.courseRegister, {
    slug: detail.slug,
    id: detail.id,
  });

  const openingTime = moment(detail.opening_time).format("DD/MM/YYYY");

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
                  <strong>Khai giảng:</strong> {openingTime}
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
              <div className="video" onClick={() => setIsOpenModal(true)}>
                <div className="icon">
                  <img src="/img/play-icon-white.png" alt="" />
                </div>{" "}
                <span>giới thiệu</span>
              </div>
              <div className="money">{currency(detail.money)} VND</div>
            </div>
          </div>
          <VideoModal
            visible={isOpenModal}
            onCancel={() => setIsOpenModal(false)}
          >
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
          </VideoModal>
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
              <strong>Ngày bắt đầu: </strong> {openingTime} <br />
              <strong>Thời gian học: </strong> {detail.schedule}
            </p>
            <h3 className="title">Người dạy</h3>
            <div className="teaches">
              <Teacher {...detail.teacher} />
            </div>
            {detail.mentor.length > 0 && (
              <>
                <h3 className="title">Người hướng dẫn</h3>
                <div className="teaches">
                  {detail.mentor.map((e) => (
                    <Teacher key={e.id} {...e} />
                  ))}
                </div>
              </>
            )}

            <div className="bottom">
              <div className="user">
                <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
              </div>
              <Link className="btn main btn-register round" to={registerPath}>
                đăng ký
              </Link>
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
