document.addEventListener("DOMContentLoaded", () => {
  // ======== IMAGE MODAL (Facebook-like) ========
  const image = document.querySelector(".myImage img"); // main profile image
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  if (image && modal && modalImage && closeBtn) {
    // Open modal when image is clicked
    image.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImage.src = image.src;
      setTimeout(() => modalImage.classList.add("show"), 10);
      document.body.style.overflow = "hidden";
    });

    // Close modal with ×
    closeBtn.addEventListener("click", () => {
      modalImage.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }, 200);
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modalImage.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
        }, 200);
      }
    });
  }

  // ======== DARK MODE FEATURE ========
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  if (toggleButton) {
    // Load saved mode
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      toggleButton.textContent = '☀️';
    } else {
      body.classList.remove('dark-mode');
      toggleButton.textContent = '🌙';
    }

    // Toggle on click
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      } else {
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
