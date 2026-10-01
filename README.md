# ĐỀ KIỂM TRA GIỮA KỲ — THỰC HÀNH
## Học phần: INT.7.18 – Web FrontEnd nâng cao (Mã đề 01)
## Ứng dụng đặt món "Quán Huế Xưa" (React 19 + Vite 6, JavaScript)

---

### THÔNG TIN SINH VIÊN
- **Họ và tên:** Lê Quang Tấn
- **Mã số sinh viên (MSSV):** 2401ITA045
- **Lớp:** CNTT
- **Nhánh làm bài:** `giuaky/2401ITA045`
- **Tiêu đề Pull Request:** `[Giữa kỳ] 2401ITA045 - Lê Quang Tấn`

---

### MỤC TỰ ĐÁNH GIÁ KẾT QUẢ BÀI LÀM
| Câu | Nội dung | Điểm tối đa | Tự đánh giá | Ghi chú hoàn thành |
|:---:|---|:---:|:---:|---|
| **Câu 1** | Biến môi trường, component, kết xuất danh sách | 1,5 | 1,5 / 1,5 | Đọc tên quán từ `.env`, hiển thị đủ 8 món, nhãn "Hết món", format giá tiền |
| **Câu 2** | State, sự kiện, nâng trạng thái lên cha | 2,5 | 2,5 / 2,5 | State `gio`, hàm `datMon` bất biến, tính `tongPhan` trực tiếp, chọn thẻ và chặn nổi bọt sự kiện |
| **Câu 3** | Hook: useMemo, useEffect, useRef, hook tùy biến | 2,5 | 2,5 / 2,5 | `useMemo` tính tổng tiền, `useEffect` đồng bộ `document.title`, `useLocalStorage` lưu giỏ hàng, `useRef` auto-focus ô Họ tên |
| **Câu 4** | Biểu mẫu có kiểm soát, thành phần kết hợp, đặt lại bằng key | 2,5 | 2,5 / 2,5 | Form kiểm chứng onBlur & onSubmit, `Khung` nhận slot `hanhDong`, reset form bằng thay đổi `key` |
| **Câu 5** | Git và quy trình nộp bài | 1,0 | 1,0 / 1,0 | Nhánh `giuaky/2401ITA045`, 5 commits rõ ràng, cập nhật đầy đủ README |
| **Tổng** | **Toàn bộ bài thi** | **10,0** | **10,0 / 10,0** | Đã kiểm thử đạt 8/8 bước kịch bản tự kiểm tra (Phụ lục A) |

---

### KHAI BÁO SỬ DỤNG AI
- **Có sử dụng công cụ AI (ChatGPT, Copilot, Claude...) hay không:** **Có (ở mức độ tham khảo và hỗ trợ tra cứu)**
- **Chi tiết các phần có tham khảo / hỗ trợ:**
  - Tra cứu cú pháp biểu thức chính quy (Regex) kiểm tra số điện thoại 10 chữ số bắt đầu bằng 0 (`/^0\d{9}$/`) phục vụ kiểm chứng biểu mẫu.
  - Tham khảo cách bọc `try...catch` an toàn trong khởi tạo lười (lazy initialization: `useState(() => ...)`) của custom hook `useLocalStorage` để phòng ngừa lỗi phân tích JSON khi dữ liệu bộ nhớ cục bộ bị hỏng.
  - Tra cứu phương thức `e.stopPropagation()` nhằm ngăn chặn hiện tượng nổi bọt sự kiện (event bubbling) khi bấm nút "Đặt món" bên trong thẻ món ăn.
- **Cam kết:** Toàn bộ kiến thức nền tảng, thiết kế cây thành phần, kỹ thuật nâng trạng thái (lifting state up), logic giỏ hàng và xử lý biểu mẫu đều do sinh viên tự tay lập trình và nắm vững. Sinh viên hoàn toàn hiểu rõ bản chất từng dòng mã và sẵn sàng trả lời trực tiếp toàn bộ câu hỏi vấn đáp của giảng viên.

---

### KẾT QUẢ TỰ KIỂM TRA (PHỤ LỤC A)
| Bước | Thao tác | Kết quả mong đợi | Kết quả thực tế | Trạng thái |
|:---:|---|---|---|:---:|
| 1 | Mở trang lần đầu (giỏ trống) | Tiêu đề = tên quán; Header 0 phần; "Giỏ hàng trống"; nút "Gửi đơn" bị mờ; con trỏ ở ô Họ tên | Đúng yêu cầu | **ĐẠT** |
| 2 | Đặt Bún bò Huế 2 lần, Bánh bèo 1 lần | Header 3 phần; hai dòng trong giỏ; tổng 120.000 đ; tab trình duyệt "(3) Quán Huế Xưa" | Đúng yêu cầu | **ĐẠT** |
| 3 | Nhấn F5 (tải lại trang) | Giỏ vẫn còn đủ 3 phần nhờ `useLocalStorage` | Đúng yêu cầu | **ĐẠT** |
| 4 | Bấm vào thẻ Bánh bèo, rồi bấm "Đặt món" ở thẻ Nem lụi | Viền chọn vẫn ở Bánh bèo; giỏ tăng thêm Nem lụi | Đúng yêu cầu | **ĐẠT** |
| 5 | Bấm nút "Đặt món" của Bánh bột lọc | Nút bị mờ (`disabled`), không bấm được | Đúng yêu cầu | **ĐẠT** |
| 6 | Bấm "Gửi đơn" khi form trống | Hai thông báo lỗi đỏ hiện dưới ô Họ tên và SĐT; chưa gửi | Đúng yêu cầu | **ĐẠT** |
| 7 | Nhập họ tên "Minh Anh", SĐT "0912345678", Gửi đơn | "Đã nhận đơn của Minh Anh"; giỏ về 0; form trống | Đúng yêu cầu | **ĐẠT** |
| 8 | Bấm "Xóa giỏ hàng" sau khi đặt món mới | Giỏ về trống, Header về 0 | Đúng yêu cầu | **ĐẠT** |

---

### HƯỚNG DẪN CÀI ĐẶT VÀ CHẠY
1. Cài đặt các gói phụ thuộc:
   ```bash
   npm install
   ```
2. Khởi chạy môi trường phát triển:
   ```bash
   npm run dev
   ```
3. Mở trình duyệt tại địa chỉ: `http://localhost:5173`
