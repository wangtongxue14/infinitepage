// ===== js/main.js =====
// 主交互逻辑

// 按钮点击显示校训精神
const welcomeBtn = document.getElementById('welcomeBtn');
const tipBox = document.getElementById('tipBox');

if (welcomeBtn && tipBox) {
    welcomeBtn.addEventListener('click', function () {
        tipBox.innerText = "明德、博学、笃行、致远 —— 以德为先，以学为本，知行合一，志存高远！";
    });
}

// 平滑滚动导航
document.querySelectorAll('nav a').forEach(function (item) {
    // 只处理锚点链接（以 # 开头）
    if (item.getAttribute('href') && item.getAttribute('href').startsWith('#')) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetDom = document.querySelector(targetId);
            if (targetDom) {
                targetDom.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// 页面加载打印日志
window.addEventListener('load', function () {
    console.log("🏫 光明中学官网加载完成 🎉");
});