import React, { useMemo } from 'react';
import { dinhDangGia } from '../utils/dinhDangGia';

// C3.1: Component Giỏ hàng
export default function GioHang({ gio = [], dsMon = [] }) {
  // C3.1: Tính tongTien bằng useMemo, chỉ tính lại khi gio hoặc dsMon đổi
  const tongTien = useMemo(() => {
    return gio.reduce((tong, item) => {
      const mon = dsMon.find((m) => m.id === item.id);
      return tong + (mon ? mon.gia * item.soLuong : 0);
    }, 0);
  }, [gio, dsMon]);

  return (
    <div className="gio-hang-box" data-testid="gio-hang">
      {/* C3.1: Khi giỏ rỗng hiện đúng chữ "Giỏ hàng trống" */}
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
