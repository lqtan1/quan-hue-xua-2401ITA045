import React, { useState } from 'react';

export default function FormDatMon({ onGui, choPhepGui = false }) {
  // TODO C4.1: State cho họ tên, số điện thoại, ghi chú và state lỗi
  const [formData, setFormData] = useState({
    hoTen: '',
    soDienThoai: '',
    ghiChu: '',
  });

  const [loi, setLoi] = useState({
    hoTen: '',
    soDienThoai: '',
  });

  // TODO C3.4: Trong FormDatMon.jsx dùng useRef và useEffect để ô "Họ tên" tự có con trỏ mỗi khi form vừa hiện

  // Hàm kiểm tra hợp lệ đã viết sẵn
  const kiemTra = (name, value) => {
    const valTrim = value.trim();
    if (name === 'hoTen') {
      return valTrim.length < 2 ? 'Họ tên cần ít nhất 2 ký tự' : '';
    }
    if (name === 'soDienThoai') {
      const regexSDT = /^0\d{9}$/;
      return !regexSDT.test(valTrim) ? 'Số điện thoại gồm 10 chữ số, bắt đầu bằng 0' : '';
    }
    return '';
  };

  // TODO C4.1: Kiểm tra từng ô khi rời ô (onBlur) và kiểm tra cả hai ô khi gửi (onSubmit)
  const xuLyGui = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-dat-mon" onSubmit={xuLyGui}>
      <div className="form-group">
        <label htmlFor="hoTen">Họ tên</label>
        <input
          id="hoTen"
          type="text"
          name="hoTen"
          value={formData.hoTen}
          onChange={(e) => setFormData({ ...formData, hoTen: e.target.value })}
          placeholder="Nhập họ và tên..."
        />
        {loi.hoTen && <p className="loi" role="alert">{loi.hoTen}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="soDienThoai">Số điện thoại</label>
        <input
          id="soDienThoai"
          type="tel"
          name="soDienThoai"
          value={formData.soDienThoai}
          onChange={(e) => setFormData({ ...formData, soDienThoai: e.target.value })}
          placeholder="Ví dụ: 0912345678"
        />
        {loi.soDienThoai && <p className="loi" role="alert">{loi.soDienThoai}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="ghiChu">Ghi chú</label>
        <textarea
          id="ghiChu"
          name="ghiChu"
          rows={3}
          value={formData.ghiChu}
          onChange={(e) => setFormData({ ...formData, ghiChu: e.target.value })}
          placeholder="Yêu cầu thêm..."
        />
      </div>

      {/* TODO C4.3: Nút "Gửi đơn" chỉ bấm được khi choPhepGui = true */}
      <button type="submit" className="btn-gui-don" disabled={!choPhepGui}>
        Gửi đơn
      </button>
    </form>
  );
}
