const items = document.getElementsByClassName("nav-item");
const navItems = [...items];
const mobileItems = document.getElementsByClassName("mobile-nav-item");
const mobilenavItems = [...mobileItems];
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const faMenu = document.getElementById("fa-menu");
const handleClick = ({ currentTarget: item }) => {
  const selected = document.getElementsByClassName("selected")[0];
  if (selected) selected.classList.remove("selected", "active");
  item.classList.add("active", "selected");
};

let isDisplay = false;
const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  if (!isDisplay) {
    mobileMenu.style.top = "70px";
    faMenu.classList.remove("fa-bars");
    faMenu.classList.add("fa-times");
    isDisplay = true;
  } else {
    mobileMenu.style.top = "-500px";
    faMenu.classList.remove("fa-times");
    faMenu.classList.add("fa-bars");
    isDisplay = false;
  }
});

const handleMobileMenu = ({ currentTarget: item }) => {
  const selected = document.getElementsByClassName("selected")[0];
  if (selected) selected.classList.remove("selected", "mobile-active");
  item.classList.add("mobile-active", "selected");
};

navItems.map((item) => {
  item.addEventListener("click", handleClick);
});

mobilenavItems.map((item) => {
  item.addEventListener("click", handleMobileMenu);
});
