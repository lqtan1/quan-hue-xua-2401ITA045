import React from 'react';
import { dinhDangGia } from '../utils/dinhDangGia';

// C1.2, C2.1, C2.4: Thẻ món ăn
export default function MonAnCard({ mon, dangChon, onChon, onDat }) {
  // C2.4: Bấm nút "Đặt món" bên trong thẻ KHÔNG được làm đổi món đang chọn (chặn nổi bọt)
  const xuLyDatMon = (e) => {
    e.stopPropagation();
    if (!mon.daHet && onDat) {
      onDat(mon.id);
    }
  };

  // C2.4: Bấm vào thẻ món thì thẻ đó được chọn
  const xuLyChonThe = () => {
    if (onChon) {
      onChon(mon.id);
    }
  };

  return (
    <article
      className={`mon-an-card ${dangChon ? 'dang-chon' : ''}`}
      onClick={xuLyChonThe}
    >
      <div className="mon-an-header">
        <h3>{mon.ten}</h3>
        {/* C1.2: Nếu món đã hết (daHet) hiện nhãn "Hết món" trong <span className="het-mon"> */}
        {mon.daHet && <span className="het-mon">Hết món</span>}
      </div>

      {/* C1.2: Hiển thị mô tả món */}
      <p className="mo-ta">{mon.moTa}</p>

      <div className="mon-an-footer">
        {/* C1.2: Hiển thị giá bằng hàm dinhDangGia */}
        <span className="gia-tien">{dinhDangGia(mon.gia)}</span>

        {/* C2.1: Thêm nút "Đặt món", vô hiệu hóa khi món đã hết. Bấm nút thì gọi onDat(mon.id) */}
        <button
          type="button"
          className="btn-dat-mon"
          disabled={mon.daHet}
          onClick={xuLyDatMon}
        >
          Đặt món
        </button>
      </div>
    </article>
  );
}
