import React from 'react';
import { dinhDangGia } from '../utils/dinhDangGia';

export default function MonAnCard({ mon, dangChon, onChon, onDat }) {
  // TODO C2.4: Bấm nút "Đặt món" bên trong thẻ KHÔNG được làm đổi món đang chọn (chặn nổi bọt)
  const xuLyDatMon = (e) => {
    // Gọi onDat(mon.id)
  };

  return (
    <article
      className={`mon-an-card ${dangChon ? 'dang-chon' : ''}`}
      onClick={() => onChon && onChon(mon.id)}
    >
      <div className="mon-an-header">
        <h3>{mon.ten}</h3>
        {/* TODO C1.2: Nếu món đã hết (daHet) hiện nhãn "Hết món" trong <span className="het-mon"> */}
      </div>

      {/* TODO C1.2: Hiển thị mô tả món */}

      <div className="mon-an-footer">
        {/* TODO C1.2: Hiển thị giá bằng hàm dinhDangGia */}
        <span className="gia-tien"></span>

        {/* TODO C2.1: Thêm nút "Đặt món", vô hiệu hóa khi món đã hết. Bấm nút thì gọi onDat(mon.id) */}
      </div>
    </article>
  );
}
