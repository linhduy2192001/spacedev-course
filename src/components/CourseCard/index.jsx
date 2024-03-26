import React from "react";
import { generatePath } from "react-router";
import { PATH } from "../../config/path";
import { Link } from "react-router-dom";
import Skeleton from "../Skeleton";

export default function CourseCards({
  money,
  id,
  long_description,
  short_description,
  slug,
  title,
  thumbnailUrl,
}) {
  const path = generatePath(PATH.courseDetail, { slug, id });
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={path}>
          <img src={thumbnailUrl} alt="" />
        </Link>
        <div className="info">
          <Link className="name" to={path}>
            {title}
          </Link>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src="img/avt.png" alt="" />
            </div>
            <div className="name">Vương Đặng</div>
          </div>
          <Link to="/register.html" className="register-btn">
            6,000,000 đ
          </Link>
        </div>
      </div>
    </div>
  );
}

export const CourseCardLoading = () => {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to="#">
          {/* <img src={thumbnailUrl} alt="" /> */}
          <Skeleton height={310} />
        </Link>
        <div className="info">
          <Link className="name" to="#">
            <Skeleton height={30} />
          </Link>
          <Skeleton height={80} />
          {/* <p className="des">{short_description}</p> */}
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              {/* <img src="img/avt.png" alt="" /> */}
              <Skeleton height={36} width={36} shap="circle" />
            </div>
            {/* <div className="name">Vương Đặng</div> */}
            <Skeleton height={24} width="50%" />
          </div>
        </div>
      </div>
    </div>
  );
};
