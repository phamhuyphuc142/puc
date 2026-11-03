# puc

Ứng dụng chung của nhóm: JavaScript + React Native + Expo Web.

## Chạy trong GitHub Codespaces

Mở Code → Codespaces → mở Codespace hiện có hoặc tạo một Codespace mới. Trong Terminal:

```bash
cd ung-dung
npm ci
npm run web -- --port 8081
```

Mở tab PORTS (Cổng), tìm 8081 rồi chọn Open in Browser. Nếu thư viện đã cài, chỉ cần chạy lệnh npm run web.

## Bắt đầu viết giao diện

- `ung-dung/App.js`: màn hình bắt đầu, viết bằng JavaScript.
- `ung-dung/assets/`: hình ảnh và biểu tượng.
- `ung-dung/package.json`: thư viện và lệnh chạy.

## Làm việc cùng đồng đội

1. Người sở hữu kho vào Settings → Collaborators → Add people để mời tài khoản GitHub của đồng đội.
2. Một người mở Codespaces và chạy app.
3. Cài tiện ích Live Share của Microsoft, chọn Share rồi gửi liên kết phiên cho đồng đội. Liên kết hết hiệu lực khi phiên kết thúc.
4. Để đồng đội xem web trên trình duyệt riêng, có thể đặt cổng 8081 thành Public và gửi địa chỉ của cổng đó. Bất kỳ ai có liên kết đều có thể xem; chỉ dùng dữ liệu thử.
5. Sau buổi làm, kiểm tra các tệp đã sửa, Commit rồi Push lên GitHub.

Khi làm riêng vào các thời điểm khác nhau, mỗi người nên dùng nhánh riêng và tạo Pull Request để gộp thay đổi.

## Kết thúc buổi làm

Dừng Expo bằng Ctrl+C. Trên github.com/codespaces, chọn Stop codespace để dừng môi trường và tiết kiệm hạn mức.

## Kiểm tra mã JavaScript

Trong thư mục ung-dung, chạy npm run lint và npm run typecheck. Mã ứng dụng vẫn là JavaScript (.js).
