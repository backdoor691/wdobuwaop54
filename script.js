// تسجيل الدخول
document.getElementById('loginBtn').addEventListener('click', function() {
    let email = document.getElementById('email').value;
    if (email) {
        localStorage.setItem('userEmail', email);  // حفظ البريد الإلكتروني
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('room-section').style.display = 'block';
    } else {
        alert('يرجى إدخال بريد إلكتروني!');
    }
});

// إنشاء غرفة
document.getElementById('createRoomBtn').addEventListener('click', function() {
    let roomCode = generateRoomCode();
    document.getElementById('roomCode').textContent = roomCode;
    document.getElementById('roomDetails').style.display = 'block';
});

// انضمام لغرفة
document.getElementById('joinRoomBtn').addEventListener('click', function() {
    let roomCode = prompt("أدخل كود الغرفة:");
    if(roomCode) {
        alert('تم الانضمام للغرفة!');
        // إضافة كود الانضمام هنا
    }
});

// توليد كود غرفة فريد
function generateRoomCode() {
    return Math.floor(Math.random() * 1000000000); // توليد كود عشوائي
}

// نسخ الكود
document.getElementById('copyCodeBtn').addEventListener('click', function() {
    let roomCode = document.getElementById('roomCode').textContent;
    navigator.clipboard.writeText(roomCode)
        .then(() => alert('تم نسخ الكود!'))
        .catch(err => alert('فشل نسخ الكود'));
});

// زر تم
document.getElementById('doneBtn').addEventListener('click', function() {
    alert('في انتظار دخول الوسيط...');
    // هنا يمكن إضافة عداد 5 دقائق
});
