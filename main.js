//slider for hero section
let swiper2 = new Swiper(".heroSwiper", {
  pagination: {
    el: ".swiper-pagination",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  },
});

//mobile menu bar toggle 
const menuBtn = document.getElementById("menu-bar");
const closeMenubar = document.getElementById("close-bar");
const mobSidebar = document.querySelector(".mob-sidebar");

function toggleMenu() {
  mobSidebar.classList.toggle("hidden");
  let boolValue = false;
  if (mobSidebar.classList.contains("hidden")) {
    boolValue = boolValue;
    document.getElementsByTagName("body")[0].style.overflow = boolValue ? "hidden" : "";
  } else {
    boolValue = !boolValue;
    document.getElementsByTagName("body")[0].style.overflow = boolValue ? "hidden" : "";
  }
}

menuBtn.addEventListener("click", toggleMenu);
closeMenubar.addEventListener("click", toggleMenu);

//sticky bar for window scroll
window.addEventListener("scroll", () => {
  const stickyBar = document.querySelector(".sticky-bar");
  const stickyBar2 = document.querySelector("#sticky-bar");

  if (window.scrollY > 0) {
    stickyBar.classList.add("scrolled");
    stickyBar2.style.display = "block";
    stickyBar2.classList.add("scrolled");
  } else {
    stickyBar.classList.remove("scrolled");
    stickyBar2.style.display = "none";
    stickyBar2.classList.remove("scrolled");
  }
})

//toggle for sub menu item
const aeroRights = document.querySelectorAll(".mob-sidebar .fa-chevron-right");
const backAero = document.querySelector(".mob-sidebar .fa-chevron-left");
const mainMenus = document.querySelector(".mob-sidebar .navlinks");

for (const item of aeroRights) {

  function showSubMenu(step) {
    const ele = document.querySelector(`.submenu${step}`);
    console.log(ele);

    item.addEventListener("click", () => {
      ele.classList.remove("hidden");
      mainMenus.style.transform = "translate(100%)";
      ele.parentElement.style.transform = "translate(10%)";
    });

    backAero.addEventListener("click", () => {
      ele.classList.add("hidden");
      ele.parentElement.style.transform = "translate(100%)";
      mainMenus.style.transform = "translate(0%)";
    })
  }
}

//browse category

const browseMenu = document.querySelector(".browse");
const browseCate = document.querySelector(".browse-category");

browseMenu.addEventListener("click", () => {
  browseCate.classList.toggle("tBrow")
})





//slider Categories item
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  centeredSlides: false,
  spaceBetween: 100,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});

