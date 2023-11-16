document.querySelector('.show-filter-btn-tab').addEventListener("click",()=>{

    document.querySelector('.filter-container').classList.toggle("show");

})

const btns=document.querySelectorAll('.view-btn')
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
      // hide other articles
      productContainer.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });



