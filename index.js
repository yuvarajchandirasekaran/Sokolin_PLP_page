document.querySelector('.show-filter-btn-tab').addEventListener("click", () => {

  document.querySelector('.filter-container').classList.toggle("show");
  document.querySelector('.add-icon').classList.toggle("close-icon");


})

const btns = document.querySelectorAll('.view-btn')
const productContainer = document.querySelectorAll('.products-view');
const mainContainer = document.querySelector('.products-listing-container')

mainContainer.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other container
    productContainer.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

let favBtn = document.querySelectorAll('.fav-btn')

for (let i = 0; i < favBtn.length; i++) {
  favBtn[i].addEventListener("click", () => {
    favBtn[i].classList.toggle('add-fav')
  })
}

let asc_des_filter = document.querySelector('.uparrow')
asc_des_filter.addEventListener("click", () => {
  asc_des_filter.classList.toggle('downarrow')
})


let burgerBtn = document.querySelector('.burger-btn')

burgerBtn.addEventListener("click", () => {
  if(burgerBtn.innerText=='sort'){
    burgerBtn.innerText='close'
    document.querySelector('.nav-links').classList.add('show')
  }
  else{
    burgerBtn.innerText='sort'
    document.querySelector('.nav-links').classList.remove('show')

  }
})




