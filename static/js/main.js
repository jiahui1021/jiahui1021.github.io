// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
});

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item img');

  if (!lightbox || !galleryItems.length) return;

  // 点击缩略图打开大图
  galleryItems.forEach(img => {
    img.addEventListener('click', (e) => {
      // 获取大图链接，如果没有 data-full 属性就用 src
      const fullSizeSrc = e.target.getAttribute('data-full') || e.target.src;
      lightboxImg.src = fullSizeSrc;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // 禁止背景滚动
    });
  });

  // 关闭 Lightbox 的函数
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // 恢复滚动
    setTimeout(() => { lightboxImg.src = ''; }, 300); // 清理图片源
  };

  // 点击关闭按钮关闭
  closeBtn.addEventListener('click', closeLightbox);

  // 点击背景关闭
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // 按 ESC 键关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}