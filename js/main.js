// ===== js/main.js =====
// 主交互逻辑

// ===== 校训展开/收起 =====
const welcomeBtn = document.getElementById('welcomeBtn');
const tipBox = document.getElementById('tipBox');
const closeTipBtn = document.getElementById('closeTipBtn');

if (welcomeBtn && tipBox) {
    welcomeBtn.addEventListener('click', function () {
        tipBox.style.display = 'block';
        welcomeBtn.textContent = '📖 校训已展开';
        welcomeBtn.style.background = '#e8b931';
        welcomeBtn.style.color = '#1e3c72';
    });
}

if (closeTipBtn && tipBox) {
    closeTipBtn.addEventListener('click', function () {
        tipBox.style.display = 'none';
        welcomeBtn.textContent = '点击查看校训精神';
        welcomeBtn.style.background = '#2a5298';
        welcomeBtn.style.color = '#fff';
    });
}

// ===== 导航栏固定功能 =====
(function() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    // 创建占位元素
    const placeholder = document.createElement('div');
    placeholder.className = 'nav-placeholder';
    nav.parentNode.insertBefore(placeholder, nav);

    // 获取导航栏初始位置
    let navOffsetTop = nav.offsetTop;

    // 滚动处理函数
    function handleScroll() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollY >= navOffsetTop) {
            nav.classList.add('fixed');
            placeholder.classList.add('active');
            placeholder.style.height = nav.offsetHeight + 'px';
        } else {
            nav.classList.remove('fixed');
            placeholder.classList.remove('active');
            placeholder.style.height = '0';
        }
    }

    // 监听滚动事件（使用节流优化性能）
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // 页面加载和窗口大小变化时重新计算位置
    window.addEventListener('load', function() {
        navOffsetTop = nav.offsetTop;
        handleScroll();
    });

    window.addEventListener('resize', function() {
        navOffsetTop = nav.offsetTop;
        handleScroll();
    });

})();

// ===== 平滑滚动导航 =====
document.querySelectorAll('nav a').forEach(function (item) {
    // 只处理锚点链接（以 # 开头）
    if (item.getAttribute('href') && item.getAttribute('href').startsWith('#')) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetDom = document.querySelector(targetId);
            if (targetDom) {
                const navHeight = document.getElementById('mainNav').offsetHeight;
                const targetPosition = targetDom.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// ===== 页面加载打印日志 =====
window.addEventListener('load', function () {
    console.log("🏫 光明中学官网加载完成 🎉");
});
