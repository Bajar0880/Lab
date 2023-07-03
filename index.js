function closeMenu() {
    const backDrop = document.getElementsByClassName("backdrop")[0];
    const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
    backDrop.style.display = "none";
    mobileMenu.style.display = "none";
  }
  function showMenu() {
    const backDrop = document.getElementsByClassName("backdrop")[0];
    const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
    backDrop.style.display = "flex";
    mobileMenu.style.display = "flex";
  }
  
//Account Page
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        alert("You have successfully logged in.");
        location.reload();
        window.location.href="index.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
  