const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Thêm lớp 'clicked' để thay đổi màu nền thành màu xanh
        button.classList.add("clicked");

        // Hiển thị thông báo cho người dùng
        alert("Sản phẩm đã được thêm vào giỏ hàng!");

        // Tùy chọn: vô hiệu hóa nút sau khi click
        button.disabled = true;
    });
});