document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (username === "" || password === "") {
    errorMsg.textContent = "Please fill in all fields.";
  } else {
    // Simulate successful login
    alert(`Welcome ${username}!`);
    errorMsg.textContent = "";
    // Redirect or open dashboard here
  }
});

// Login Validation
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (username === "" || password === "") {
      errorMsg.textContent = "Please fill in all fields.";
    } else {
      errorMsg.textContent = "";
      alert(`Welcome back, ${username}!`);
    }
  });
}

// Signup Validation
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("newUsername").value.trim();
    const email = document.getElementById("newEmail").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();
    const errorMsg = document.getElementById("signupErrorMsg");

    if (!username || !email || !password || !confirmPassword) {
      errorMsg.textContent = "All fields are required.";
    } else if (password !== confirmPassword) {
      errorMsg.textContent = "Passwords do not match.";
    } else {
      errorMsg.textContent = "";
      alert(`Account created for ${username}!`);
      // You can redirect to login or dashboard here
    }
  });
}
