import React, { useState, useRef, useEffect } from 'react';

// C3.4, C4.1, C4.3: Hoàn thiện FormDatMon thành biểu mẫu có kiểm soát
export default function FormDatMon({ onGui, choPhepGui = false }) {
  // C4.1: State cho họ tên, số điện thoại, ghi chú
  const [formData, setFormData] = useState({
    hoTen: '',
    soDienThoai: '',
    ghiChu: '',
  });

  // C4.1: State lỗi
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

  // Hàm kiểm tra hợp lệ
  const kiemTra = (name, value) => {
    const valTrim = value.trim();
    if (name === 'hoTen') {
      if (valTrim.length < 2) {
        return 'Họ tên cần ít nhất 2 ký tự';
      }
      return '';
    }

    if (name === 'soDienThoai') {
      const regexSDT = /^0\d{9}$/;
      if (!regexSDT.test(valTrim)) {
        return 'Số điện thoại gồm 10 chữ số, bắt đầu bằng 0';
      }
      return '';
    }

    return '';
  };

  // Cập nhật state dữ liệu qua e.target.name và e.target.value
  const xuLyThayDoi = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // C4.1: Kiểm tra từng ô khi rời ô (onBlur)
  const xuLyBlur = (e) => {
    const { name, value } = e.target;
    const thongBaoLoi = kiemTra(name, value);
    setLoi((prev) => ({
      ...prev,
      [name]: thongBaoLoi,
    }));
  };

  // C4.1: Kiểm tra cả hai ô khi gửi (onSubmit)
  const xuLyGui = (e) => {
    e.preventDefault();

    const loiHoTen = kiemTra('hoTen', formData.hoTen);
    const loiSDT = kiemTra('soDienThoai', formData.soDienThoai);

    setLoi({
      hoTen: loiHoTen,
      soDienThoai: loiSDT,
    });

    // Gửi khi còn lỗi: chặn tải lại trang và KHÔNG gọi onGui
    if (loiHoTen || loiSDT) {
      return;
    }

    // Gửi hợp lệ: gọi onGui({ hoTen, soDienThoai, ghiChu }) với giá trị đã cắt khoảng trắng hai đầu
    if (onGui) {
      onGui({
        hoTen: formData.hoTen.trim(),
        soDienThoai: formData.soDienThoai.trim(),
        ghiChu: formData.ghiChu.trim(),
      });
    }
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
          onBlur={xuLyBlur}
          placeholder="Nhập họ và tên..."
        />
        {/* Lỗi hiện dưới ô tương ứng trong <p className="loi" role="alert"> */}
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
          onBlur={xuLyBlur}
          placeholder="Ví dụ: 0912345678"
        />
        {/* Lỗi hiện dưới ô tương ứng trong <p className="loi" role="alert"> */}
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

      {/* C4.3: Nút "Gửi đơn" chỉ bấm được khi choPhepGui = true */}
      <button
        type="submit"
        className="btn-gui-don"
        disabled={!choPhepGui}
      >
        Gửi đơn
      </button>
    </form>
  );
}
