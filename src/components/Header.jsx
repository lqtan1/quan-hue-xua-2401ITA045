import React from 'react';

export default function Header({ tongPhan = 0 }) {
  // TODO C1.1: Đọc tên quán từ biến môi trường import.meta.env.VITE_TEN_QUAN
  // Hiển thị trong thẻ <h1>, không được viết cứng tên quán trong mã
  const tenQuan = 'Quán Ăn';

  return (
    <header className="header-quan">
      <div className="header-container">
        <h1>{tenQuan}</h1>
        <div className="header-gio">
          <span>Giỏ: </span>
          <span className="badge-gio" data-testid="tong-phan">
            {tongPhan}
          </span>
          <span> phần</span>
        </div>
      </div>
    </header>
  );
}
