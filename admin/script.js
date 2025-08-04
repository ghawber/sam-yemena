
// بيانات تسجيل الدخول التجريبية
const ADMIN_EMAIL = "admin@sam.com";
const ADMIN_PASSWORD = "123456";

function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === ADMIN_EMAIL && pass === ADMIN_PASSWORD) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "بيانات الدخول غير صحيحة!";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

function saveData() {
    const data = {
        about: document.getElementById("aboutText").value,
        color: document.getElementById("mainColor").value,
        title: document.getElementById("siteTitle").value,
        facebook: document.getElementById("facebookLink").value,
        whatsapp: document.getElementById("whatsappLink").value
    };
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
}

window.onload = function() {
    if (location.pathname.includes("dashboard") && localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
};
