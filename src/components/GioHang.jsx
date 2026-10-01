import React from 'react';
import { dinhDangGia } from '../utils/dinhDangGia';

// C2.2: Hiển thị danh sách giỏ hàng
export default function GioHang({ gio = [], dsMon = [] }) {
  // TODO C3.1: Sẽ tối ưu tongTien bằng useMemo ở Câu 3
  const tongTien = gio.reduce((tong, item) => {
    const mon = dsMon.find((m) => m.id === item.id);
    return tong + (mon ? mon.gia * item.soLuong : 0);
  }, 0);

  return (
    <div className="gio-hang-box" data-testid="gio-hang">
      {/* Khi giỏ rỗng hiện "Giỏ hàng trống" thay cho danh sách */}
      {gio.length === 0 ? (
        <p className="gio-hang-trong">Giỏ hàng trống</p>
      ) : (
        <ul className="danh-sach-gio">
          {gio.map((item) => {
            const mon = dsMon.find((m) => m.id === item.id);
            const tenMon = mon ? mon.ten : 'Món không rõ';
            const donGia = mon ? mon.gia : 0;
            const thanhTien = donGia * item.soLuong;

            return (
              <li key={item.id} className="dong-gio-hang">
                {tenMon} × {item.soLuong} — {dinhDangGia(thanhTien)}
              </li>
            );
          })}
        </ul>
      )}

      <div className="tong-tien-container">
        <span className="nhan-tong">Tổng tiền: </span>
        <span className="gia-tong" data-testid="tong-tien">
          {dinhDangGia(tongTien)}
        </span>
      </div>
    </div>
  );
}
