// Device toggle and lightbox functionality for screenshots
(function() {
  // Wait for DOM to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Lightbox state
  let currentDevice = 'iphone';
  let currentIndex = 0;
  let screenshots = {
    iphone: [],
    ipad: []
  };

  function init() {
    initScreenshotToggle();
    initLightbox();
  }

  // Device Toggle Functionality
  function initScreenshotToggle() {
    const toggleButtons = document.querySelectorAll('.device-toggle');
    const iphoneContainer = document.getElementById('iphone-screenshots');
    const ipadContainer = document.getElementById('ipad-screenshots');

    if (!toggleButtons.length || (!iphoneContainer && !ipadContainer)) {
      return;
    }

    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const device = button.dataset.device;
        currentDevice = device;
        switchDevice(device, toggleButtons, iphoneContainer, ipadContainer);
      });
    });
  }

  function switchDevice(device, buttons, iphoneContainer, ipadContainer) {
    buttons.forEach(btn => {
      const isActive = btn.dataset.device === device;

      if (isActive) {
        btn.classList.add('bg-white', 'dark:bg-gray-700', 'text-gray-900', 'dark:text-white', 'shadow-md');
        btn.classList.remove('text-gray-600', 'dark:text-gray-400');
      } else {
        btn.classList.remove('bg-white', 'dark:bg-gray-700', 'text-gray-900', 'dark:text-white', 'shadow-md');
        btn.classList.add('text-gray-600', 'dark:text-gray-400');
      }
    });

    if (device === 'iphone' && iphoneContainer) {
      iphoneContainer.classList.remove('hidden');
      if (ipadContainer) ipadContainer.classList.add('hidden');
    } else if (device === 'ipad' && ipadContainer) {
      ipadContainer.classList.remove('hidden');
      if (iphoneContainer) iphoneContainer.classList.add('hidden');
    }
  }

  // Lightbox Functionality
  function initLightbox() {
    const screenshotImages = document.querySelectorAll('.screenshot-image');
    const lightbox = document.getElementById('screenshot-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxCurrent = document.getElementById('lightbox-current');
    const lightboxTotal = document.getElementById('lightbox-total');

    if (!lightbox || !screenshotImages.length) return;

    // Build screenshot arrays
    screenshotImages.forEach(img => {
      const device = img.dataset.device;
      const src = img.src;
      if (device && src) {
        screenshots[device].push(src);
      }
    });

    // Add click handlers to screenshots
    screenshotImages.forEach(img => {
      img.addEventListener('click', () => {
        const device = img.dataset.device;
        const index = parseInt(img.dataset.index);
        openLightbox(device, index);
      });
    });

    // Close button
    lightboxClose.addEventListener('click', closeLightbox);

    // Navigation buttons
    lightboxPrev.addEventListener('click', showPrevious);
    lightboxNext.addEventListener('click', showNext);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          showPrevious();
        } else if (e.key === 'ArrowRight') {
          showNext();
        }
      }
    });

    function openLightbox(device, index) {
      currentDevice = device;
      currentIndex = index;
      updateLightbox();
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    function closeLightbox() {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      document.body.style.overflow = ''; // Restore scroll
    }

    function showPrevious() {
      const total = screenshots[currentDevice].length;
      currentIndex = (currentIndex - 1 + total) % total;
      updateLightbox();
    }

    function showNext() {
      const total = screenshots[currentDevice].length;
      currentIndex = (currentIndex + 1) % total;
      updateLightbox();
    }

    function updateLightbox() {
      const currentScreenshots = screenshots[currentDevice];
      if (currentScreenshots.length === 0) return;

      lightboxImage.src = currentScreenshots[currentIndex];
      lightboxCurrent.textContent = currentIndex + 1;
      lightboxTotal.textContent = currentScreenshots.length;
    }
  }
})();
