// ===== js/utils.js =====
// 工具函数模块

/**
 * 节流函数：限制高频事件触发频率
 * @param {Function} fn - 要执行的函数
 * @param {number} delay - 间隔时间（ms）
 * @returns {Function} 节流后的函数
 */
function throttle(fn, delay = 100) {
    let timer = null;
    return function(...args) {
        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    };
}

/**
 * 获取 DOM 元素的安全方法
 * @param {string} selector - CSS 选择器
 * @param {Element} context - 查询上下文，默认 document
 * @returns {Element|null}
 */
function $(selector, context = document) {
    return context.querySelector(selector);
}

/**
 * 获取多个 DOM 元素
 * @param {string} selector - CSS 选择器
 * @param {Element} context - 查询上下文
 * @returns {NodeList}
 */
function $$(selector, context = document) {
    return context.querySelectorAll(selector);
}

/**
 * 简单的防抖
 * @param {Function} fn
 * @param {number} wait
 * @returns {Function}
 */
function debounce(fn, wait = 200) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), wait);
    };
}
