import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../config/path";

export default function Page404() {
  return (
    <main id="main">
      <div className="notfound">
        <div className="container">
          <section>
            <h2 className="main-title">404</h2>
            <p>Không tìm thấy trang</p>
            <Link to={PATH.home} className="btn main round">
              Trang chủ
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
