import React, { useState, useRef, useEffect } from 'react';

export default function FormDatMon({ onGui, choPhepGui = false }) {
  const [formData, setFormData] = useState({
    hoTen: '',
    soDienThoai: '',
    ghiChu: '',
  });

  const [loi, setLoi] = useState({
    hoTen: '',
    soDienThoai: '',
  });

  // C3.4: Dùng useRef và useEffect để ô "Họ tên" tự có con trỏ mỗi khi form vừa hiện
  const hoTenInputRef = useRef(null);

  useEffect(() => {
    if (hoTenInputRef.current) {
      hoTenInputRef.current.focus();
    }
  }, []);

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

  const xuLyThayDoi = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const xuLyGui = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-dat-mon" onSubmit={xuLyGui}>
      <div className="form-group">
        <label htmlFor="hoTen">Họ tên</label>
        <input
          id="hoTen"
          ref={hoTenInputRef}
          type="text"
          name="hoTen"
          value={formData.hoTen}
          onChange={xuLyThayDoi}
          placeholder="Nhập họ và tên..."
        />
        {loi.hoTen && (
          <p className="loi" role="alert">
            {loi.hoTen}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="soDienThoai">Số điện thoại</label>
        <input
          id="soDienThoai"
          type="tel"
          name="soDienThoai"
          value={formData.soDienThoai}
          onChange={xuLyThayDoi}
          placeholder="Ví dụ: 0912345678"
        />
        {loi.soDienThoai && (
          <p className="loi" role="alert">
            {loi.soDienThoai}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="ghiChu">Ghi chú</label>
        <textarea
          id="ghiChu"
          name="ghiChu"
          rows={3}
          value={formData.ghiChu}
          onChange={xuLyThayDoi}
          placeholder="Yêu cầu thêm..."
        />
      </div>

      <button type="submit" className="btn-gui-don" disabled={!choPhepGui}>
        Gửi đơn
      </button>
    </form>
  );
}
