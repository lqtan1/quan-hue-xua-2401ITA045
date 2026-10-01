import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DanhSachMon from './components/DanhSachMon';
import GioHang from './components/GioHang';
import Khung from './components/Khung';
import FormDatMon from './components/FormDatMon';
import useLocalStorage from './hooks/useLocalStorage';
import { DANH_SACH_MON } from './data/danhSachMon';
import './App.css';

function App() {
  // C3.3: Đổi state giỏ ở App sang useLocalStorage("gio-hang", [])
  const [gio, setGio] = useLocalStorage('gio-hang', []);

  // C2.4: Lưu id món đang chọn bằng state idDangChon ở App
  const [idDangChon, setIdDangChon] = useState(null);

  // C2.3: Tính tongPhan (tổng soLuong trong giỏ) trực tiếp từ gio, KHÔNG tạo state riêng
  const tongPhan = gio.reduce((tong, item) => tong + item.soLuong, 0);

  // C3.2: Dùng useEffect để cập nhật document.title: giỏ rỗng thì là tên quán; có hàng thì là "(n) Tên quán" với n là tổng số phần
  useEffect(() => {
    const tenQuan = import.meta.env.VITE_TEN_QUAN || 'Quán Huế Xưa';
    if (tongPhan > 0) {
      document.title = `(${tongPhan}) ${tenQuan}`;
    } else {
      document.title = tenQuan;
    }
  }, [tongPhan]);

  // C2.2: Hàm đặt món
  const datMon = (id) => {
    setGio((prevGio) => {
      const index = prevGio.findIndex((item) => item.id === id);
      if (index === -1) {
        return [...prevGio, { id, soLuong: 1 }];
      } else {
        return prevGio.map((item, i) =>
          i === index ? { ...item, soLuong: item.soLuong + 1 } : item
        );
      }
    });
  };

  // C2.4: Chọn thẻ món
  const chonMon = (id) => {
    setIdDangChon(id);
  };

  return (
    <div className="ung-dung-quan">
      <Header tongPhan={tongPhan} />

      <main className="khung-noi-dung-chinh">
        <section className="phan-thuc-don">
          <h2>Thực đơn 8 món</h2>
          <DanhSachMon
            dsMon={DANH_SACH_MON}
            idDangChon={idDangChon}
            onChon={chonMon}
            onDat={datMon}
          />
        </section>

        <aside className="phan-dat-hang">
          <Khung tieuDe="Giỏ hàng">
            <GioHang gio={gio} dsMon={DANH_SACH_MON} />
          </Khung>

          <Khung tieuDe="Thông tin nhận món">
            <FormDatMon choPhepGui={gio.length > 0} />
          </Khung>
        </aside>
      </main>
    </div>
  );
}

export default App;
