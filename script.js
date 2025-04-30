// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvdkIuMAVPmnxOWz_Y_sK7EGwT8Sonz-Y",
  authDomain: "waseet-6bc57.firebaseapp.com",
  projectId: "waseet-6bc57",
  storageBucket: "waseet-6bc57.appspot.com",
  messagingSenderId: "336407254728",
  appId: "1:336407254728:web:e98138cb8e936e5cddf7fd",
  measurementId: "G-EQ34MXT255"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// إعدادات الرابط للتحقق
const actionCodeSettings = {
  url: window.location.href,
  handleCodeInApp: true
};

// عند تحميل الصفحة
window.onload = () => {
  const emailInput = document.getElementById("email");
  const loginBtn = document.getElementById("loginBtn");
  const loginScreen = document.getElementById("loginScreen");
  const homeScreen = document.getElementById("homeScreen");

  loginBtn.addEventListener("click", async () => {
    const email = emailInput.value;
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert("تم إرسال رابط التحقق إلى بريدك الإلكتروني.");
    } catch (error) {
      alert("خطأ: " + error.message);
    }
  });

  // التحقق من رابط التحقق عند العودة من البريد
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("رجاءً أدخل بريدك الإلكتروني:");
    }
    signInWithEmailLink(auth, email, window.location.href)
      .then(() => {
        alert("تم تسجيل الدخول بنجاح!");
        window.localStorage.removeItem("emailForSignIn");
        loginScreen.style.display = "none";
        homeScreen.style.display = "block";
      })
      .catch((error) => {
        alert("فشل التحقق: " + error.message);
      });
  }
};
