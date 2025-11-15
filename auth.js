// ข้อมูลทดลองผู้ใช้
const mockUsers = {
  "editor1@school.com": { password: "1234", role: "editor" },
  "editor2@school.com": { password: "1234", role: "editor" },
  "teacher1@school.com": { password: "1234", role: "teacher" },
  "teacher2@school.com": { password: "1234", role: "teacher" }
};

// ฟังก์ชันล็อกอิน
function login() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (!mockUsers[email]) {
    document.getElementById("msg").innerText = "ไม่พบบัญชีนี้";
    return;
  }
  if (mockUsers[email].password !== password) {
    document.getElementById("msg").innerText = "รหัสผ่านผิด";
    return;
  }
  localStorage.setItem("role", mockUsers[email].role);
  localStorage.setItem("userEmail", email);

  // ไป select-faculty.html ทุก role
  window.location = "select-faculty.html";
}

function isRole(role) {
  return localStorage.getItem("role") === role;
}

function getCurrentUser() {
  return localStorage.getItem("userEmail");
}