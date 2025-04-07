let mining = false;
let balanceBTC = parseFloat(localStorage.getItem('balanceBTC')) || 0;
let balanceUSD = parseFloat(localStorage.getItem('balanceUSD')) || 0;
let interval;

// استعادة الرصيد عند تحميل الصفحة
document.getElementById("mining-balance").innerText = balanceBTC.toFixed(8);
document.getElementById("usd-balance").innerText = "$" + balanceUSD.toFixed(2);

// بدء التعدين
document.getElementById("start-mining").addEventListener("click", function() {
    if (!mining) {
        mining = true;
        interval = setInterval(() => {
            balanceBTC += 0.0000004625;
            balanceUSD = balanceBTC * 40000;

            // تحديث الرصيد على الشاشة
            document.getElementById("mining-balance").innerText = balanceBTC.toFixed(8);
            document.getElementById("usd-balance").innerText = "$" + balanceUSD.toFixed(2);

            // حفظ الرصيد في localStorage
            localStorage.setItem('balanceBTC', balanceBTC);
            localStorage.setItem('balanceUSD', balanceUSD);
        }, 1000);
    }
});

// إيقاف التعدين
document.getElementById("stop-mining").addEventListener("click", function() {
    clearInterval(interval);
    mining = false;
});

// فتح نافذة السحب
document.getElementById("withdraw-btn").addEventListener("click", function() {
    document.getElementById("withdraw-modal").style.display = "block";
});

// إغلاق نافذة السحب
document.getElementById("close-withdraw").addEventListener("click", function() {
    document.getElementById("withdraw-modal").style.display = "none";
});

// نسخ عنوان المحفظة
document.getElementById("donation-wallet").addEventListener("click", function() {
    navigator.clipboard.writeText(this.value);
    document.getElementById("copy-success").style.display = "block";
    setTimeout(() => {
        document.getElementById("copy-success").style.display = "none";
    }, 3000);
});

// طلب السحب
document.getElementById("confirm-withdraw").addEventListener("click", function() {
    let userWallet = document.getElementById("user-wallet").value;
    if (!userWallet) {
        alert("يرجى إدخال عنوان محفظتك");
        return;
    }
    if (balanceUSD < 800) {
        alert("الحد الأدنى للسحب هو (800$) رصيدك غير كاف للسحب");
        return;
    }
    alert("مباشرة بعد دفع رسوم الإيجار سيصلك مبلغ أربحاك على محفظة البيتكوين الخاصة بك نشكرك على ثقتك و نقدر إختيارك وساطتنا لتعدين العملات الرقمية");
});

// إضافة رابط تيليجرام إلى زر "تواصل معنا"
document.getElementById("contact-btn").addEventListener("click", function() {
    window.open("https://t.me/btcmig_bot", "_blank"); // استبدل "your_telegram_username" باسم المستخدم أو رابط البوت الخاص بك
});
document.addEventListener("DOMContentLoaded", function () {
    // الحصول على العناصر
    var aboutBtn = document.getElementById("about-btn");
    var aboutModal = document.getElementById("about-modal");
    var closeAbout = document.getElementById("close-about");

    // عند الضغط على زر نبذة عنا
    aboutBtn.addEventListener("click", function () {
        aboutModal.style.display = "block";
    });

    // عند الضغط على زر الإغلاق
    closeAbout.addEventListener("click", function () {
        aboutModal.style.display = "none";
    });

    // عند الضغط خارج النافذة، يتم إغلاقها
    window.addEventListener("click", function (event) {
        if (event.target === aboutModal) {
            aboutModal.style.display = "none";
        }
    });
});
// إظهار وإغلاق النافذة
document.getElementById("boost-btn").addEventListener("click", function() {
  document.getElementById("boost-modal").style.display = "block";
});

document.getElementById("close-boost").addEventListener("click", function() {
  document.getElementById("boost-modal").style.display = "none";
});

// نسخ عنوان المحفظة
document.getElementById("boost-wallet").addEventListener("click", function() {
  navigator.clipboard.writeText(this.value);
  document.getElementById("boost-copy-success").style.display = "block";
  setTimeout(() => {
    document.getElementById("boost-copy-success").style.display = "none";
  }, 3000);
});

// وظائف تسريع التعدين - يتم تفعيلها يدويًا فقط
function activateBoost6h() {
  clearInterval(interval);
  interval = setInterval(() => {
    balanceBTC += 0.0000009259; // 800$ خلال 6 ساعات
    balanceUSD = balanceBTC * 40000;
    document.getElementById("mining-balance").innerText = balanceBTC.toFixed(8);
    document.getElementById("usd-balance").innerText = "$" + balanceUSD.toFixed(2);
  }, 1000);
}

function activateBoost3h() {
  clearInterval(interval);
  interval = setInterval(() => {
    balanceBTC += 0.0000018518; // 800$ خلال 3 ساعات
    balanceUSD = balanceBTC * 40000;
    document.getElementById("mining-balance").innerText = balanceBTC.toFixed(8);
    document.getElementById("usd-balance").innerText = "$" + balanceUSD.toFixed(2);
  }, 1000);
}

// عند الضغط
document.getElementById("boost-6h").addEventListener("click", activateBoost6h);
document.getElementById("boost-3h").addEventListener("click", activateBoost3h);