import React from "react";
import { useAsync } from "../../hooks/useAsync";
import { courseService } from "../../services/course.services";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../../components/Skeleton";
import moment from "moment";
import { Link, generatePath } from "react-router-dom";
import { PATH } from "../../config/path";

export default function MyCourse() {
  const { loading, data: courses } = useFetch(courseService.getMyCourse);
  console.log("course", courses);
  if (loading)
    return Array.from(Array(5)).map((_, i) => (
      <div key={i} className="mb-5">
        <Skeleton height={250} />{" "}
      </div>
    ));

  return (
    <div className="tab2">
      {courses.data.length === 0 && (
        <p>
          Bạn hiện tại không có khoá học nào, bạn vui lòng đăng kí khoá học để
          xem
        </p>
      )}
      {courses?.data.map((e) => {
        const coursePath = generatePath(PATH.courseDetail, {
          slug: e.course.slug,
          id: e.course.id,
        });
        return (
          <div className="item" key={e.course.id}>
            <div className="cover">
              <img src={e.course.thumbnailUrl} alt="" />
            </div>
            <div className="info">
              <Link to={coursePath} className="name">
                {e.course.title}
              </Link>
              <div className="date">
                Khai giảng ngày{" "}
                {moment(e.course.opening_time).format("DD/MM/YYYY")}
              </div>
              <div className="row">
                <div>
                  <img src="/img/clock.svg" alt="" className="icon" />
                  {e.total_hours}
                </div>
                <div>
                  <img src="/img/play.svg" alt="" className="icon" />
                  {e.video}
                </div>
                <div>
                  <img src="/img/user.svg" alt="" className="icon" />
                  {e.student}
                </div>
              </div>
              <div className="process">
                <div className="line">
                  <div className="rate" style={{ width: `${e.process}%` }} />
                </div>
                {e.process}%
              </div>
              <Link to={coursePath} className="btn overlay round btn-continue">
                Tiếp tục học
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
