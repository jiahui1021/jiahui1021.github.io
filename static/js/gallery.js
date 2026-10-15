(function () {
  'use strict';

  const imageBase = '/static/images/gallery/optimized/';
  const photos = [
    {
      file: 'MtYL3.webp',
      palette: 'mist',
      width: 2200,
      height: 1467,
      title: 'Silent Canopy',
      caption: 'Clouds drifting through the forests of Jade Dragon Snow Mountain',
      category: 'mountains',
      orientation: 'landscape',
      featured: true
    },
    {
      file: 'MtYL2.webp',
      palette: 'mist',
      width: 7008,
      height: 4672,
      title: 'Where Clouds Descend',
      caption: 'Glacier ridges beneath a veil of cloud at Jade Dragon Snow Mountain',
      category: 'mountains',
      orientation: 'landscape'
    },
    {
      file: 'Mt.Yulong.webp',
      palette: 'mist',
      width: 4672,
      height: 7008,
      title: 'Glacier and Stone',
      caption: 'Weathered rock and snow along the high slopes of Jade Dragon Snow Mountain',
      category: 'mountains',
      orientation: 'portrait'
    },
    {
      file: 'mountain-lake-cliff.webp',
      palette: 'mist',
      width: 4672,
      height: 7008,
      title: 'Clouds Above the Lake',
      caption: 'Cliffs rising above a quiet mountain lake',
      category: 'mountains',
      orientation: 'portrait'
    },
    {
      file: 'misty-mountain-layers.webp',
      palette: 'mist',
      width: 7008,
      height: 4672,
      title: 'Layers of Blue',
      caption: 'Distant ridges dissolving into the evening haze',
      category: 'mountains',
      orientation: 'landscape'
    },
    {
      file: 'qingdao-sunset-silhouette.webp',
      palette: 'warm',
      width: 2033,
      height: 2172,
      title: 'Golden Wake',
      caption: 'A jet ski cutting across Qingdao’s golden sunset',
      category: 'sea',
      orientation: 'portrait',
      featured: true
    },
    {
      file: 'sea.webp',
      palette: 'blue',
      width: 7008,
      height: 4672,
      title: 'Indigo Blue',
      caption: 'Blue water and distant islands along Qingdao’s coast',
      category: 'sea',
      orientation: 'landscape'
    },
    {
      file: 'sea2.webp',
      palette: 'blue',
      width: 4670,
      height: 6227,
      title: 'Edge of the Tide',
      caption: 'Waves folding over dark rocks at the Qingdao shore',
      category: 'sea',
      orientation: 'portrait'
    },
    {
      file: 'sea3.webp',
      palette: 'blue',
      width: 1467,
      height: 2200,
      title: 'Dappled Shimmer',
      caption: 'Sunlight scattered across the quiet sea near Qingdao',
      category: 'sea',
      orientation: 'portrait'
    },
    {
      file: 'sea4.webp',
      palette: 'blue',
      width: 1467,
      height: 2200,
      title: 'Where Green Meets Wave',
      caption: 'A silver path of light stretching across the tide',
      category: 'sea',
      orientation: 'portrait'
    },
    {
      file: 'sea5.webp',
      palette: 'blue',
      width: 1467,
      height: 2200,
      title: 'Shadows and Shimmer',
      caption: 'Clear waves breaking over the coastal rocks of Qingdao',
      category: 'sea',
      orientation: 'portrait'
    },
    {
      file: 'RedMoon.webp',
      palette: 'warm',
      width: 1376,
      height: 920,
      title: 'Crimson Tide',
      caption: 'A red moon rising above the evening tide',
      category: 'sea',
      orientation: 'landscape'
    },
    {
      file: 'hong-kong-harbour.webp',
      palette: 'blue',
      width: 1402,
      height: 2101,
      title: 'Blue Hour Harbour',
      caption: 'Hong Kong’s harbour front beneath a hazy blue sky',
      category: 'cities',
      orientation: 'portrait'
    },
    {
      file: 'Nanjing.webp',
      palette: 'mist',
      width: 2200,
      height: 1467,
      title: 'Flight Over Stone',
      caption: 'A lone bird crossing the skyline above Nanjing',
      category: 'cities',
      orientation: 'landscape'
    },
    {
      file: 'jng.webp',
      palette: 'mist',
      width: 4672,
      height: 7008,
      title: 'Memorial Sculpture',
      caption: 'A stone figure standing against the memorial walls of Nanjing',
      category: 'cities',
      orientation: 'portrait'
    },
    {
      file: 'scut_ws.webp',
      palette: 'blue',
      width: 4672,
      height: 7008,
      title: 'The Clock Tower',
      caption: 'SCUT’s clock tower framed by summer blue',
      category: 'campus',
      orientation: 'portrait'
    },
    {
      file: 'scut_ws2.webp',
      palette: 'blue',
      width: 4672,
      height: 7008,
      title: 'Old Green Roof',
      caption: 'An old tiled roof beneath the campus trees',
      category: 'campus',
      orientation: 'portrait'
    },
    {
      file: 'scut_ws3.webp',
      palette: 'blue',
      width: 4672,
      height: 7008,
      title: 'Traditional Gate',
      caption: 'The traditional gate of SCUT in afternoon light',
      category: 'campus',
      orientation: 'portrait'
    },
    {
      file: 'scut_ws4.webp',
      palette: 'blue',
      width: 7008,
      height: 4672,
      title: 'Red Brick Facade',
      caption: 'Sunlit geometry on a red-brick campus facade',
      category: 'campus',
      orientation: 'landscape'
    },
    {
      file: 'sunset_scut.webp',
      palette: 'warm',
      width: 7008,
      height: 4672,
      title: 'Golden Canopy',
      caption: 'Evening clouds glowing above the SCUT campus',
      category: 'campus',
      orientation: 'landscape',
      featured: true
    },
    {
      file: 'zwl.webp',
      palette: 'green',
      width: 2200,
      height: 1467,
      title: 'Blue Glaze Archway',
      caption: 'A blue-and-white archway at Sun Yat-sen Mausoleum',
      category: 'cities',
      orientation: 'landscape'
    },
    {
      file: 'zwy.webp',
      palette: 'green',
      width: 5635,
      height: 3690,
      title: 'Tranquil Mirror',
      caption: 'A quiet lawn beneath the trees at South China Botanical Garden',
      category: 'gardens',
      orientation: 'landscape'
    },
    {
      file: 'zwy2.webp',
      palette: 'green',
      width: 4672,
      height: 7008,
      title: 'Dappled Meadow',
      caption: 'A garden pond reflecting trees and sky',
      category: 'gardens',
      orientation: 'portrait'
    },
    {
      file: 'water-lily-monet.webp',
      rotation: -90,
      palette: 'green',
      width: 7008,
      height: 4672,
      title: 'Water Lilies',
      caption: 'Monet’s water lilies behind a veil of color',
      category: 'art',
      orientation: 'portrait'
    },
    {
      file: 'DHcat.webp',
      palette: 'warm',
      width: 1467,
      height: 2200,
      title: 'Silent Sentinel',
      caption: 'A campus cat resting in a shaft of window light',
      category: 'cats',
      orientation: 'portrait'
    },
    {
      file: 'cat_scut.webp',
      palette: 'warm',
      width: 1467,
      height: 2200,
      title: 'Petals and Play',
      caption: 'A curious cat reaching toward flowers on campus',
      category: 'cats',
      orientation: 'portrait'
    }
  ];

  const grid = document.getElementById('gallery-grid');
  const count = document.getElementById('gallery-count');
  const filterButtons = Array.from(document.querySelectorAll('.filter-chip'));
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxImage = document.querySelector('.lightbox-image');
  const paletteOrder = ['mist', 'blue', 'green', 'warm'];
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

  function configureImageFrame(frame, photo) {
    const rotated = Boolean(photo.rotation);
    const ratio = rotated ? photo.height / photo.width : photo.width / photo.height;
    frame.style.setProperty('--photo-ratio', String(ratio));
    frame.style.setProperty('--source-ratio', String(photo.width / photo.height));
    frame.classList.toggle('is-rotated', rotated);
  }

  function renderGallery() {
    if (!grid) return;

    const matchingPhotos = photos.filter((photo) => activeFilter === 'all' || photo.category === activeFilter);
    visiblePhotos = paletteOrder.flatMap((palette) => matchingPhotos.filter((photo) => photo.palette === palette));
    grid.replaceChildren();
    const groups = new Map();
    paletteOrder.forEach((palette) => {
      if (!visiblePhotos.some((photo) => photo.palette === palette)) return;
      const group = document.createElement('div');
      group.className = 'gallery-color-group';
      group.dataset.palette = palette;
      groups.set(palette, group);
      grid.append(group);
    });

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

      const frame = document.createElement('span');
      frame.className = 'gallery-image';
      configureImageFrame(frame, photo);

      const img = document.createElement('img');
      img.alt = photo.title;
      img.width = photo.width;
      img.height = photo.height;
      img.loading = index < 6 ? 'eager' : 'lazy';
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
      frame.append(img);
      item.append(frame, info);
      item.addEventListener('click', () => openLightbox(index));
      groups.get(photo.palette).append(item);

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

    configureImageFrame(lightboxImage, photo);
    lightboxImg.style.opacity = '0';
    lightboxImage.style.transform = 'scale(0.96)';

    setTimeout(() => {
      lightboxImg.src = imagePath(photo);
      lightboxImg.alt = photo.title;
      lightboxTitle.textContent = photo.title;
      lightboxCaption.textContent = photo.caption;

      if (lightboxImg.complete) {
        lightboxImg.style.opacity = '1';
        lightboxImage.style.transform = 'scale(1)';
      } else {
        lightboxImg.addEventListener('load', () => {
          lightboxImg.style.opacity = '1';
          lightboxImage.style.transform = 'scale(1)';
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
