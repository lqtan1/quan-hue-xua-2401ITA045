import React from 'react';
import { dinhDangGia } from '../utils/dinhDangGia';

export default function GioHang({ gio = [], dsMon = [] }) {
  // TODO C3.1: Trong GioHang.jsx tính tongTien (tổng thanhTien của các dòng) bằng useMemo, chỉ tính lại khi gio hoặc dsMon đổi
  const tongTien = 0;

  return (
    <div className="gio-hang-box" data-testid="gio-hang">
      {/* TODO C3.1: Khi giỏ rỗng hiện "Giỏ hàng trống" thay cho danh sách */}
      <ul className="danh-sach-gio">
        {gio.map((item) => null)}
      </ul>

      <div className="tong-tien-container">
        <span className="nhan-tong">Tổng tiền: </span>
        <span className="gia-tong" data-testid="tong-tien">
          {dinhDangGia(tongTien)}
        </span>
      </div>
    </div>
  );
}
