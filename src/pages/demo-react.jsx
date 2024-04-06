import React from "react";

export default function DemoReact() {
  return (
    <main id="main">
      <div className="register-course">
        <section className="section-1 wrap container">
          {/* <div class="main-sub-title">liên hệ</div> */}
          <h2 className="main-title">HỢP TÁC CÙNG Spacedev</h2>
          <p className="top-des">
            Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau
            tạo ra những sản phẩm giá trị, cũng như việc hợp tác với các đối tác
            tuyển dụng và công ty trong và ngoài nước.
          </p>
          <form className="form">
            <label>
              <p>
                Họ và tên<span>*</span>
              </p>
              <input type="text" placeholder="Họ và tên bạn" />
            </label>
            <label>
              <p>Số điện thoại</p>
              <input type="text" placeholder="Số điện thoại" />
            </label>
            <label>
              <p>
                Email<span>*</span>
              </p>
              <input type="text" placeholder="Email của bạn" />
            </label>
            <label>
              <p>Website</p>
              <input type="text" placeholder="Đường dẫn website http://" />
            </label>
            <label>
              <p>
                Tiêu đề<span>*</span>
              </p>
              <input type="text" placeholder="Tiêu đề liên hệ" />
            </label>
            <label>
              <p>
                Nội dung<span>*</span>
              </p>
              <textarea name id cols={30} rows={10} defaultValue={""} />
            </label>
            <button className="btn main rect">đăng ký</button>
          </form>
        </section>
        {/* <div class="register-success">
                <div class="contain">
                    <div class="main-title">đăng ký thành công</div>
                    <p>
                        <strong>Chào mừng Vương Đặng đã trở thành thành viên mới của Spacedev Team.</strong> <br>
                        Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                        hoặc số điện thoại của bạn.
                    </p>
                </div>
                <a href="/" class="btn main rect">về trang chủ</a>
            </div> */}
      </div>
    </main>
  );
}
