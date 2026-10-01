import React from 'react';

// C1.1: Header đọc tên quán từ biến môi trường import.meta.env.VITE_TEN_QUAN
// Quy ước: export default, tên quán nằm trong thẻ <h1>, số phần trong giỏ nằm trong thẻ có data-testid="tong-phan"
export default function Header({ tongPhan = 0 }) {
  // Đọc tên quán qua biến môi trường Vite, không viết cứng trong mã
  const tenQuan = import.meta.env.VITE_TEN_QUAN;

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
