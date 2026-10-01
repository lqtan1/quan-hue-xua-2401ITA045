import { useState, useEffect } from 'react';

// C3.3: Custom hook useLocalStorage(khoa, giaTriDau)
// Trả về [giaTri, setGiaTri] như useState
// Lần đầu đọc localStorage (có thì JSON.parse, chưa có thì dùng giaTriDau, dùng khởi tạo lười)
// Dữ liệu hỏng thì dùng giaTriDau chứ không để ứng dụng sập
// Mỗi khi giá trị đổi thì ghi lại; setGiaTri vẫn nhận được cả hàm cập nhật
export default function useLocalStorage(khoa, giaTriDau) {
  // Khởi tạo lười (lazy initialization) với useState(() => ...)
  const [giaTri, setGiaTri] = useState(() => {
    try {
      const duLieu = window.localStorage.getItem(khoa);
      return duLieu !== null ? JSON.parse(duLieu) : giaTriDau;
    } catch (error) {
      // Dữ liệu hỏng hoặc lỗi phân tích cú pháp thì dùng giaTriDau
      return giaTriDau;
    }
  });

  // Mỗi khi giá trị hoặc khóa thay đổi thì ghi lại vào localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(khoa, JSON.stringify(giaTri));
    } catch (error) {
      // Bỏ qua lỗi nếu quota bộ nhớ đầy
    }
  }, [khoa, giaTri]);

  return [giaTri, setGiaTri];
}
