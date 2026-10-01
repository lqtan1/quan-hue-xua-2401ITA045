import React from 'react';
import { dinhDangGia } from '../utils/dinhDangGia';

export default function MonAnCard({ mon, dangChon, onChon, onDat }) {
  // TODO C2.4: Bấm nút "Đặt món" bên trong thẻ KHÔNG được làm đổi món đang chọn (chặn nổi bọt)
  const xuLyDatMon = (e) => {
    // Sẽ xử lý ở Câu 2
  };

  return (
    <article
      className={`mon-an-card ${dangChon ? 'dang-chon' : ''}`}
      onClick={() => onChon && onChon(mon.id)}
    >
      <div className="mon-an-header">
        <h3>{mon.ten}</h3>
        {/* C1.2: Nếu món đã hết (daHet) hiện nhãn "Hết món" trong <span className="het-mon"> */}
        {mon.daHet && <span className="het-mon">Hết món</span>}
      </div>

      {/* C1.2: Hiển thị mô tả món */}
      <p className="mo-ta">{mon.moTa}</p>

      <div className="mon-an-footer">
        {/* C1.2: Hiển thị giá bằng hàm dinhDangGia có sẵn (ví dụ "45.000 đ") */}
        <span className="gia-tien">{dinhDangGia(mon.gia)}</span>

        {/* TODO C2.1: Thêm nút "Đặt món" */}
      </div>
    </article>
  );
}
