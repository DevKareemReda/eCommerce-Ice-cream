// ============== OPEN & REMOVE SEARCH BOX
let openSearch = document.querySelector(".open-search");
let searchBox = document.querySelector(".search-box");
openSearch.onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    this.classList.replace("fa-magnifying-glass", "fa-close");
    searchBox.classList.add("active");
  } else {
    this.classList.replace("fa-close", "fa-magnifying-glass");
    searchBox.classList.remove("active");
  }
};

// ============== OPEN & REMOVE CART BOX
let shopping = document.querySelector(".shopping");
let cartBox = document.querySelector(".cart-box");

shopping.onclick = () => {
  if (!shopping.classList.contains("active")) {
    shopping.classList.add("active")
    cartBox.classList.add("active");
  } else {
    shopping.classList.remove("active")
    cartBox.classList.remove("active");
  }
};


// ============== OPEN & REMOVE NAVBAR MOBILE

let openNav = document.querySelector(".tabs")
let mobileNav = document.querySelector(".mobile-nav")
let closeNav = document.querySelector(".close-nav")

openNav.onclick = function() {
  openNav.classList.toggle("active")
  if (openNav.classList.contains("active")) {
    openNav.classList.add("active")
    mobileNav.classList.add("active")
  } else {
    openNav.classList.remove("active")
    mobileNav.classList.remove("active")
  }
}

closeNav.onclick = function() {
  openNav.classList.remove("active")
  mobileNav.classList.remove("active")
}

// when click outside in body close navbar
window.onmouseup = function (e) {
  if (!openNav.contains(e.target) && !mobileNav.contains(e.target)) {
    openNav.classList.remove("active")
    mobileNav.classList.remove("active")
  }
};