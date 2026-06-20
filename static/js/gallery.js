(function () {
  'use strict';

  const imageBase = '/static/images/gallery/optimized/';
  const photos = [
    {
      file: 'MtYL3.webp',
      title: 'Silent Canopy',
      caption: 'Jade Dragon Snow Mountain',
      category: 'mountains',
      orientation: 'landscape',
      featured: true
    },
    {
      file: 'MtYL2.webp',
      title: 'Where Clouds Descend',
      caption: 'Jade Dragon Snow Mountain',
      category: 'mountains',
      orientation: 'landscape'
    },
    {
      file: 'Mt.Yulong.webp',
      title: 'Glacier and Stone',
      caption: 'Jade Dragon Snow Mountain',
      category: 'mountains',
      orientation: 'portrait'
    },
    {
      file: 'Sunset.webp',
      title: 'Chasing the Golden Tide',
      caption: 'Qingdao Coast',
      category: 'sea',
      orientation: 'portrait',
      featured: true
    },
    {
      file: 'sea.webp',
      title: 'Indigo Blue',
      caption: 'Qingdao',
      category: 'sea',
      orientation: 'landscape'
    },
    {
      file: 'sea2.webp',
      title: 'Edge of the Tide',
      caption: 'Qingdao',
      category: 'sea',
      orientation: 'portrait'
    },
    {
      file: 'sea3.webp',
      title: 'Dappled Shimmer',
      caption: 'Qingdao',
      category: 'sea',
      orientation: 'portrait'
    },
    {
      file: 'sea4.webp',
      title: 'Where Green Meets Wave',
      caption: 'Qingdao',
      category: 'sea',
      orientation: 'portrait'
    },
    {
      file: 'sea5.webp',
      title: 'Shadows and Shimmer',
      caption: 'Qingdao',
      category: 'sea',
      orientation: 'portrait'
    },
    {
      file: 'RedMoon.webp',
      title: 'Crimson Tide',
      caption: '海上明月共潮生',
      category: 'sea',
      orientation: 'landscape'
    },
    {
      file: 'hk.webp',
      title: 'Harbor Front',
      caption: 'Hong Kong',
      category: 'cities',
      orientation: 'portrait'
    },
    {
      file: 'Nanjing.webp',
      title: 'Flight Over Stone',
      caption: 'Nanjing',
      category: 'cities',
      orientation: 'landscape'
    },
    {
      file: 'jng.webp',
      title: 'Memorial Sculpture',
      caption: 'Nanjing',
      category: 'cities',
      orientation: 'portrait'
    },
    {
      file: 'scut_ws.webp',
      title: 'The Clock Tower',
      caption: 'SCUT Landmark',
      category: 'campus',
      orientation: 'portrait'
    },
    {
      file: 'scut_ws2.webp',
      title: 'Old Green Roof',
      caption: 'SCUT Campus',
      category: 'campus',
      orientation: 'portrait'
    },
    {
      file: 'scut_ws3.webp',
      title: 'Traditional Gate',
      caption: 'SCUT Campus',
      category: 'campus',
      orientation: 'portrait'
    },
    {
      file: 'scut_ws4.webp',
      title: 'Red Brick Facade',
      caption: 'SCUT Campus',
      category: 'campus',
      orientation: 'landscape'
    },
    {
      file: 'sunset_scut.webp',
      title: 'Golden Canopy',
      caption: 'SCUT Campus',
      category: 'campus',
      orientation: 'landscape',
      featured: true
    },
    {
      file: 'zwl.webp',
      title: 'Blue Glaze Archway',
      caption: 'Sun Yat-sen Mausoleum',
      category: 'cities',
      orientation: 'landscape'
    },
    {
      file: 'zwy.webp',
      title: 'Tranquil Mirror',
      caption: 'South China Botanical Garden',
      category: 'gardens',
      orientation: 'landscape'
    },
    {
      file: 'zwy2.webp',
      title: 'Dappled Meadow',
      caption: 'South China Botanical Garden',
      category: 'gardens',
      orientation: 'portrait'
    },
    {
      file: 'water-lily-monet.webp',
      title: 'Water Lilies',
      caption: 'Claude Monet',
      category: 'art',
      orientation: 'portrait'
    },
    {
      file: 'DHcat.webp',
      title: 'Silent Sentinel',
      caption: 'Campus Companion',
      category: 'cats',
      orientation: 'portrait'
    },
    {
      file: 'cat_scut.webp',
      title: 'Petals and Play',
      caption: 'SCUT Campus',
      category: 'cats',
      orientation: 'portrait'
    }
  ];

  const grid = document.getElementById('gallery-grid');
  const count = document.getElementById('gallery-count');
  const filterButtons = Array.from(document.querySelectorAll('.filter-chip'));
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeButton = document.querySelector('.lightbox-close');
  const prevButton = document.querySelector('.lightbox-prev');
  const nextButton = document.querySelector('.lightbox-next');

  let activeFilter = 'all';
  let visiblePhotos = photos;
  let activeIndex = 0;

  function imagePath(photo) {
    return imageBase + photo.file;
  }

  function renderGallery() {
    if (!grid) return;

    visiblePhotos = photos.filter((photo) => activeFilter === 'all' || photo.category === activeFilter);
    grid.replaceChildren();

    visiblePhotos.forEach((photo, index) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = [
        'gallery-item',
        `is-${photo.orientation}`,
        photo.featured ? 'is-featured' : ''
      ].filter(Boolean).join(' ');
      item.setAttribute('aria-label', `${photo.title}, ${photo.caption}`);
      item.style.opacity = '0';

      const img = document.createElement('img');
      img.alt = photo.title;
      img.loading = 'eager';
      img.decoding = 'async';
      if (index === 0) {
        img.fetchPriority = 'high';
      }

      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });

      img.src = imagePath(photo);

      const info = document.createElement('span');
      info.className = 'gallery-item-info';

      const title = document.createElement('strong');
      title.textContent = photo.title;

      const caption = document.createElement('span');
      caption.textContent = photo.caption;

      info.append(title, caption);
      item.append(img, info);
      item.addEventListener('click', () => openLightbox(index));
      grid.append(item);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          item.style.opacity = '1';
        });
      });
    });

    if (count) {
      count.textContent = `${visiblePhotos.length} ${visiblePhotos.length === 1 ? 'photo' : 'photos'}`;
    }
  }

  function setFilter(filter) {
    activeFilter = filter;
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    renderGallery();
  }

  function openLightbox(index) {
    activeIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    lightboxImg.removeAttribute('src');
  }

  function updateLightbox() {
    const photo = visiblePhotos[activeIndex];
    if (!photo) return;

    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.96)';

    setTimeout(() => {
      lightboxImg.src = imagePath(photo);
      lightboxImg.alt = photo.title;
      lightboxTitle.textContent = photo.title;
      lightboxCaption.textContent = photo.caption;

      if (lightboxImg.complete) {
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
      } else {
        lightboxImg.addEventListener('load', () => {
          lightboxImg.style.opacity = '1';
          lightboxImg.style.transform = 'scale(1)';
        }, { once: true });
      }
    }, 200);
  }

  function showPhoto(direction) {
    activeIndex = (activeIndex + direction + visiblePhotos.length) % visiblePhotos.length;
    updateLightbox();
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => setFilter(button.dataset.filter));
  });

  if (closeButton && prevButton && nextButton && lightbox) {
    closeButton.addEventListener('click', closeLightbox);
    prevButton.addEventListener('click', () => showPhoto(-1));
    nextButton.addEventListener('click', () => showPhoto(1));
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (lightbox.hidden) return;

      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPhoto(-1);
      if (event.key === 'ArrowRight') showPhoto(1);
    });
  }

  renderGallery();
})();
