// Mật khẩu cần nhập
const correctPassword = "14022008"; // Đặt mật khẩu thật của bạn ở đây

// Kiểm tra mật khẩu
function checkPassword() {
  const enteredPassword = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (enteredPassword === correctPassword) {
    // Mật khẩu đúng, hiển thị nội dung chính
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    // Mật khẩu sai, hiển thị thông báo lỗi
    errorMessage.textContent = "Mật khẩu không đúng. Vui lòng thử lại.\n Hint: Hãy thử nhập ngày sinh của bạn";
    errorMessage.style.display = "block";
  }
}

