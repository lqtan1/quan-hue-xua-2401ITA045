import React from 'react';
import MonAnCard from './MonAnCard';

// C1.3: Kết xuất cả 8 món trong dsMon bằng .map(), mỗi món là một <MonAnCard />
export default function DanhSachMon({ dsMon = [], idDangChon, onChon, onDat }) {
  return (
    <div className="danh-sach-mon">
      {dsMon.map((mon) => (
        <MonAnCard
          key={mon.id}
          mon={mon}
          dangChon={idDangChon === mon.id}
          onChon={onChon}
          onDat={onDat}
        />
      ))}
    </div>
  );
}
