document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("site-header");
    const headerStickyClass = "header-sticky";
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        header.classList.add(headerStickyClass);
      } else {
        header.classList.remove(headerStickyClass);
      }
    });
  });
  