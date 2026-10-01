import { useState } from 'react';

// TODO C3.3: Viết hook useLocalStorage(khoa, giaTriDau) trong hooks/useLocalStorage.js:
// trả về [giaTri, setGiaTri] như useState; lần đầu đọc localStorage (có thì JSON.parse, chưa có thì dùng giaTriDau, dùng khởi tạo lười);
// dữ liệu hỏng thì dùng giaTriDau chứ không để ứng dụng sập; mỗi khi giá trị đổi thì ghi lại;
// setGiaTri vẫn nhận được cả hàm cập nhật.
export default function useLocalStorage(khoa, giaTriDau) {
  const [giaTri, setGiaTri] = useState(giaTriDau);
  return [giaTri, setGiaTri];
}
