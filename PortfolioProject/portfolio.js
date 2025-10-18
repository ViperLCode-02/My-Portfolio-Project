document.addEventListener("DOMContentLoaded", () => {
  // ======== IMAGE MODAL ========
  const images = document.querySelectorAll(".project-card img");

  // Create modal dynamically (only once)
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content" id="modalImage" alt="Expanded project image">
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector("#modalImage");
  const closeBtn = modal.querySelector(".close");

  // Open modal when any project image is clicked
  images.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.add("open"); // Show modal
      modalImg.style.opacity = "1"; // Ensure image stays visible
      document.body.style.overflow = "hidden"; // Prevent scroll
    });
  });

  // Smooth fade-out before closing
  function closeModal() {
    modalImg.style.opacity = "0"; // Start fade-out
    setTimeout(() => {
      modal.classList.remove("open");
      document.body.style.overflow = "auto";
    }, 200); // Matches CSS animation duration
  }

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ======== DARK MODE (Persistent) ========
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  // Load previously saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  } else {
    body.classList.remove("dark-mode");
    toggleButton.textContent = "🌙";
  }

  // Toggle theme on button click
  toggleButton.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});
