import React, { useState } from 'react';
import Header from './components/Header';
import DanhSachMon from './components/DanhSachMon';
import GioHang from './components/GioHang';
import Khung from './components/Khung';
import FormDatMon from './components/FormDatMon';
import { DANH_SACH_MON } from './data/danhSachMon';
import './App.css';

function App() {
  // TODO C2.2: Trong App.jsx tạo state gio là mảng các đối tượng { id, soLuong }
  // TODO C3.3: Đổi state giỏ ở App sang useLocalStorage("gio-hang", [])
  const [gio, setGio] = useState([]);

  // TODO C2.4: Lưu id món đang chọn bằng state idDangChon ở App
  const [idDangChon, setIdDangChon] = useState(null);

  // TODO C2.3: Tính tongPhan (tổng soLuong trong giỏ) trực tiếp từ gio, KHÔNG tạo state riêng cho nó, rồi hiển thị ở Header
  const tongPhan = 0;

  // TODO C3.2: Trong App.jsx dùng useEffect để cập nhật document.title: giỏ rỗng thì là tên quán; có hàng thì là "(n) Tên quán" với n là tổng số phần

  // TODO C2.2: Viết hàm datMon(id): món chưa có trong giỏ thì thêm { id, soLuong: 1 }; đã có thì tăng soLuong thêm 1 (không thêm dòng mới). Cập nhật bất biến, không sửa trực tiếp mảng cũ.
  const datMon = (id) => {};

  return (
    <div className="ung-dung-quan">
      <Header tongPhan={tongPhan} />

      {/* TODO C4.3: Hiện thông báo "Đã nhận đơn của <Họ tên>" trong <p role="status"> */}

      <main className="khung-noi-dung-chinh">
        <section className="phan-thuc-don">
          <h2>Thực đơn 8 món</h2>
          {/* TODO C1.3: Truyền đủ props mon, dangChon, onChon, onDat */}
          <DanhSachMon dsMon={DANH_SACH_MON} />
        </section>

        <aside className="phan-dat-hang">
          {/* TODO C4.2: Trong App.jsx truyền vào khối "Giỏ hàng" một nút "Xóa giỏ hàng" để làm rỗng giỏ */}
          <Khung tieuDe="Giỏ hàng">
            <GioHang gio={gio} dsMon={DANH_SACH_MON} />
          </Khung>

          <Khung tieuDe="Thông tin nhận món">
            {/* TODO C4.3: FormDatMon có key để đặt lại form */}
            <FormDatMon />
          </Khung>
        </aside>
      </main>
    </div>
  );
}

export default App;
