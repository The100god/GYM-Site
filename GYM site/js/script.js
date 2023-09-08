
const nav = document.querySelector(".mid"); 
const navOpenBtn = document.querySelector(".navOpenBtn"); 
const navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener('click', () => {
  nav.classList.add("openNav");
})

navCloseBtn.addEventListener('click', () => {
  nav.classList.remove("openNav");
})

