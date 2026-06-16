// 暗色模式切换功能
(function() {
  'use strict';
  
  const THEME_KEY = 'preferred-theme';
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';
  
  // 获取当前主题
  function getCurrentTheme() {
    return localStorage.getItem(THEME_KEY) || DARK_THEME;
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
    
    if (theme === DARK_THEME) {
      button.textContent = '☀️';  // 太阳图标（切换到亮色模式）
      button.setAttribute('title', '切换到亮色模式');
    } else {
      button.textContent = '🌙';  // 月亮图标（切换到暗色模式）
      button.setAttribute('title', '切换到暗色模式');
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
