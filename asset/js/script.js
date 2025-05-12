// mobilenaigation js:
const menuContainer = document.getElementById("menu-container");
const toggleMenuBtn = document.getElementById("toggle-menu");
const closeMenuBtns = document.querySelectorAll("#close-menu");
const menuPanels = document.querySelectorAll(".menu-panel");
const hasSubmenuLinks = document.querySelectorAll(".has-submenu");
const backButtons = document.querySelectorAll(".back-btn");
let historyStack = [];

toggleMenuBtn.addEventListener("click", function () {
  menuContainer.classList.toggle("active");
  if (menuContainer.classList.contains("active")) {
    menuPanels.forEach((panel) => panel.classList.remove("active"));
    document.getElementById("menu-main").classList.add("active");
    historyStack = [];
  }
});

closeMenuBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    menuContainer.classList.remove("active");
    menuPanels.forEach((panel) => panel.classList.remove("active"));
    document.getElementById("menu-main").classList.add("active");
    historyStack = [];
  });
});

hasSubmenuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetMenu = document.getElementById(this.dataset.target);
    if (targetMenu) {
      historyStack.push(document.querySelector(".menu-panel.active").id);
      menuPanels.forEach((panel) => panel.classList.remove("active"));
      targetMenu.classList.add("active");
    }
  });
});

backButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (historyStack.length > 0) {
      const previousMenu = document.getElementById(historyStack.pop());
      if (previousMenu) {
        menuPanels.forEach((panel) => panel.classList.remove("active"));
        previousMenu.classList.add("active");
      }
    }
  });
});

// end mobile navigation js

// toggle video play pause
const video = document.getElementById("heroVideo");
const videoIcon = document.getElementById("videoIcon");
const muteIcon = document.getElementById("muteIcon");

function toggleVideo() {
  if (video.paused) {
    video.play();
    videoIcon.classList.remove("fa-play");
    videoIcon.classList.add("fa-pause");
  } else {
    video.pause();
    videoIcon.classList.remove("fa-pause");
    videoIcon.classList.add("fa-play");
  }
}
// toggle mute button js
function toggleMute() {
  video.muted = !video.muted;
  if (video.muted) {
    muteIcon.classList.remove("fa-volume-up");
    muteIcon.classList.add("fa-volume-mute");
  } else {
    muteIcon.classList.remove("fa-volume-mute");
    muteIcon.classList.add("fa-volume-up");
  }
}
// headr fixed js on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".navbar.header");
  if (window.scrollY > 50) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});
// wishlist icon
function toggleWishlist(btn) {
  btn.classList.toggle("active");
  const icon = btn.querySelector("i");
  if (icon.classList.contains("far")) {
    icon.classList.remove("far");
    icon.classList.add("fas");
  } else {
    icon.classList.remove("fas");
    icon.classList.add("far");
  }
}

// favicon chnage according to the theame
// Function to update the favicon based on the user's theme preference
function updateFavicon() {
  const favicon = document.getElementById("favicon");

  // Check for dark or light theme preference
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // If dark theme is preferred
    favicon.setAttribute("href", "./asset/image/logo/fav-white.png");
  } else {
    // If light theme is preferred (or no preference)
    favicon.setAttribute("href", "./asset/image/logo/fav-black.png");
  }
}

// Run the updateFavicon function on page load
window.addEventListener("load", updateFavicon);

// Listen for changes in the user's theme preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateFavicon);
// end code

//
document.querySelectorAll(".cat--product--card").forEach((card) => {
  const dots = card.querySelectorAll(".color-dot");
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      // 1) hide all carousels
      card
        .querySelectorAll(".product-carousel")
        .forEach((c) => c.classList.add("d-none"));

      // 2) show the target carousel
      const id = this.dataset.carouselId;
      const target = card.querySelector("#" + id);
      if (target) target.classList.remove("d-none");

      // 3) update active class on dots
      dots.forEach((d) => d.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
