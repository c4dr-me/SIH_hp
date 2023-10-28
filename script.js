
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("site-header");
  const headerStickyClass = "header-sticky";
  const aboutUsLink = document.querySelector(".about-us");
  const whyUsSection = document.getElementById("why-us");
  const aboutUsInfo = document.querySelector(".about-us-info");

  aboutUsLink.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the header height
      const headerHeight = header.offsetHeight;

      // Get the header margin
      const headerMargin = parseInt(window.getComputedStyle(header).marginTop);

      // Get the padding of the "Why Us" section
      const whyUsPadding = parseInt(window.getComputedStyle(whyUsSection).paddingTop);

      // Get the border radius
    const aboutUsInfoBorderRadius = parseInt(window.getComputedStyle(aboutUsInfo).borderTopLeftRadius);
    
    // Add a small offset to improve positioning
    const offset = 35;

      // Calculate the scroll position to make "Why Us" section visible, considering border radius
      const targetPosition = whyUsSection.offsetTop - headerHeight - headerMargin - whyUsPadding - aboutUsInfoBorderRadius - offset;

      // Scroll smoothly to the "Why Us" section
      window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
      });
  });

  window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
          header.classList.add(headerStickyClass);
      } else {
          header.classList.remove(headerStickyClass);
      }
  });
});
