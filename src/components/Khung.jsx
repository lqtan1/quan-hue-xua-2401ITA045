import React from 'react';

// TODO C4.2: Sửa Khung.jsx: nhận thêm prop hanhDong (một đoạn JSX) và hiển thị cạnh tiêu đề
export default function Khung({ tieuDe, children }) {
  return (
    <section className="khung-container">
      <div className="khung-header">
        <h2>{tieuDe}</h2>
      </div>
      <div className="khung-noi-dung">{children}</div>
    </section>
  );
}
