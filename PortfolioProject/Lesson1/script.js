document.addEventListener("DOMContentLoaded", function() {
  const btnAboutMe = document.getElementById('btn_aboutMe');
  const divAboutME = document.getElementById('info');

  if (btnAboutMe && divAboutME) {
    btnAboutMe.addEventListener('click', function() {
      const isHidden = divAboutME.classList.toggle('hide');
      btnAboutMe.textContent = isHidden ? "ABOUT ME" : "Show Less";
    });
  }

  const myImage = document.querySelector(".myImage img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  if (myImage && modal && modalImg && closeBtn) {
    myImage.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      document.body.style.overflow = "hidden"; // prevent background scroll
    });

    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });

    modal.addEventListener("click", function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }
});
