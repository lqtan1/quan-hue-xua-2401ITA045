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
  // C3.3: Dùng custom hook useLocalStorage với khóa "gio-hang"
  const [gio, setGio] = useLocalStorage('gio-hang', []);

  // C2.4: Lưu id món đang chọn bằng state idDangChon ở App
  const [idDangChon, setIdDangChon] = useState(null);

  // C4.3: Thông báo thành công và key để đặt lại form
  const [thongBao, setThongBao] = useState('');
  const [formKey, setFormKey] = useState(0);

  // C2.3: Tính tongPhan (tổng soLuong trong giỏ) trực tiếp từ gio, KHÔNG tạo state riêng
  const tongPhan = gio.reduce((tong, item) => tong + item.soLuong, 0);

  // C3.2: Dùng useEffect cập nhật document.title: giỏ rỗng thì là tên quán; có hàng thì là "(n) Tên quán"
  useEffect(() => {
    const tenQuan = import.meta.env.VITE_TEN_QUAN || 'Quán Huế Xưa';
    if (tongPhan > 0) {
      document.title = `(${tongPhan}) ${tenQuan}`;
    } else {
      document.title = tenQuan;
    }
  }, [tongPhan]);

  // C2.2: Hàm đặt món (cập nhật bất biến)
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

  // C4.2: Xóa giỏ hàng
  const xoaGioHang = () => {
    setGio([]);
  };

  // C2.4: Chọn thẻ món
  const chonMon = (id) => {
    setIdDangChon(id);
  };

  // C4.3: Gửi đơn: hiện thông báo "Đã nhận đơn của <Họ tên>" trong <p role="status">, làm rỗng giỏ, và đặt lại form bằng cách đổi key
  const guiDon = (thongTin) => {
    setThongBao(`Đã nhận đơn của ${thongTin.hoTen}`);
    setGio([]);
    setFormKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="ung-dung-quan">
      <Header tongPhan={tongPhan} />

      {/* C4.3 & Hợp đồng: Thông báo thành công nằm trong <p role="status"> */}
      {thongBao && (
        <div className="hop-thong-bao-status">
          <p role="status">{thongBao}</p>
        </div>
      )}

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
          {/* C4.2: Khối "Giỏ hàng" có tiêu đề h2 đúng chữ "Giỏ hàng" và nút đúng chữ "Xóa giỏ hàng" */}
          <Khung
            tieuDe="Giỏ hàng"
            hanhDong={
              <button
                type="button"
                className="btn-xoa-gio"
                onClick={xoaGioHang}
              >
                Xóa giỏ hàng
              </button>
            }
          >
            <GioHang gio={gio} dsMon={DANH_SACH_MON} />
          </Khung>

          {/* C4.3: Nút "Gửi đơn" chỉ bấm được khi choPhepGui = true; đặt lại form bằng đổi key */}
          <Khung tieuDe="Thông tin nhận món">
            <FormDatMon
              key={formKey}
              onGui={guiDon}
              choPhepGui={gio.length > 0}
            />
          </Khung>
        </aside>
      </main>
    </div>
  );
}

export default App;
