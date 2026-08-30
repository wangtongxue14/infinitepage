// ===== js/main.js =====

(function() {
    const welcomeBtn = document.getElementById('welcomeBtn');
    const tipBox = document.getElementById('tipBox');

    if (welcomeBtn && tipBox) {
        welcomeBtn.addEventListener('click', function() {
            if (tipBox.style.display === 'block') {
                tipBox.style.display = 'none';
                welcomeBtn.textContent = '点击查看校训精神';
                welcomeBtn.style.background = '#2a5298';
                welcomeBtn.style.color = '#fff';
            } else {
                tipBox.style.display = 'block';
                welcomeBtn.textContent = '收起校训';
                welcomeBtn.style.background = '#e8b931';
                welcomeBtn.style.color = '#1e3c72';
            }
        });

        const closeBtn = document.getElementById('closeTipBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                tipBox.style.display = 'none';
                welcomeBtn.textContent = '点击查看校训精神';
                welcomeBtn.style.background = '#2a5298';
                welcomeBtn.style.color = '#fff';
            });
        }
    }
})();

(function() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    const placeholder = document.createElement('div');
    placeholder.className = 'nav-placeholder';
    nav.parentNode.insertBefore(placeholder, nav);

    function updateNavOffset() {
        const rect = nav.getBoundingClientRect();
        return rect.top + window.pageYOffset;
    }

    let navOffsetTop = updateNavOffset();

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

    window.addEventListener('load', function() {
        navOffsetTop = updateNavOffset();
        handleScroll();
    });

    window.addEventListener('resize', function() {
        navOffsetTop = updateNavOffset();
        handleScroll();
    });
})();

document.querySelectorAll('nav a').forEach(function(item) {
    if (item.getAttribute('href') && item.getAttribute('href').startsWith('#')) {
        item.addEventListener('click', function(e) {
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

window.addEventListener('load', function() {
    console.log("光明中学官网加载完成");
});
