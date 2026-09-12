// 暗色模式切换功能
(function() {
  'use strict';
  
  const THEME_KEY = 'preferred-theme';
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';
  
  // 获取当前主题：优先用户保存的选择，否则跟随系统偏好
  function getCurrentTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === DARK_THEME || saved === LIGHT_THEME) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? DARK_THEME
      : LIGHT_THEME;
  }
  
  // 设置主题
  function setTheme(theme) {
    const html = document.documentElement;
    if (theme === DARK_THEME) {
      html.setAttribute('data-theme', DARK_THEME);
      localStorage.setItem(THEME_KEY, DARK_THEME);
    } else {
      html.removeAttribute('data-theme');
      localStorage.setItem(THEME_KEY, LIGHT_THEME);
    }
    updateThemeButton(theme);
  }
  
  // 更新按钮图标
  function updateThemeButton(theme) {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    
    // 只改图标本身，保留按钮内的 .icon 结构
    const icon = button.querySelector('.icon') || button;
    if (theme === DARK_THEME) {
      icon.textContent = '☀️';  // 太阳图标（切换到亮色模式）
      button.setAttribute('title', 'Switch to light mode');
      button.setAttribute('aria-label', 'Switch to light mode');
    } else {
      icon.textContent = '🌙';  // 月亮图标（切换到暗色模式）
      button.setAttribute('title', 'Switch to dark mode');
      button.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
  
  // 切换主题
  function toggleTheme() {
    const current = getCurrentTheme();
    const newTheme = current === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    setTheme(newTheme);
  }
  
  // 初始化
  function init() {
    // 应用保存的主题
    const savedTheme = getCurrentTheme();
    setTheme(savedTheme);
    
    // 绑定切换按钮
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.addEventListener('click', toggleTheme);
    }
  }
  
  // DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // 导出函数供外部调用
  window.toggleTheme = toggleTheme;
  window.setTheme = setTheme;
  window.getCurrentTheme = getCurrentTheme;
})();
