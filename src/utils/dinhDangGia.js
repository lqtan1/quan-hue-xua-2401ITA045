// Hàm định dạng số tiền sang kiểu Việt Nam đồng (VD: 45000 -> "45.000 đ")
export function dinhDangGia(gia) {
  if (typeof gia !== 'number') return '0 đ';
  return gia.toLocaleString('vi-VN') + ' đ';
}
