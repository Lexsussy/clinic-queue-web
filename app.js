// Fixed credentials
const validUsername = "admin";
const validPassword = "1234";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if(username === validUsername && password === validPassword){
    // Successful login
    window.location.href = "dashboard.html"; // new page for main app
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
}
