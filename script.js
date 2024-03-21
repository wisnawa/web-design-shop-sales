// home slider
var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlide: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// Drop down
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);
options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectOption;
    optionMenu.classList.remove("active");
  });
});
// Feature Product
var swiper = new Swiper(".featured-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Details
let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");
document.querySelectorAll(".product-container .product").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});
previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});
// Review Page
$(".testimonials-container").owlCarousel({
  loop: true,
  autoplay: true,
  autopalyTimeout: 6000,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
    },
  },
});
