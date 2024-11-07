// menu lateral select
var menu = document.querySelectorAll(".item-menu")

function selectLink(){
    menu.forEach((item)=>{
        item.classList.remove("active")
    })
    this.classList.add("active")
}

menu.forEach((item)=>{
    item.addEventListener("click", selectLink)
})

// btn expandir
var btn = document.querySelector("#btn-exp")
var menuSide = document.querySelector(".menu-lateral")

btn.addEventListener("click", function(){
    menuSide.classList.toggle("expandir")
})


// Animação escroll
const elements = document.querySelectorAll('.hidden'); 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

elements.forEach((el) => observer.observe(el))

//scroll menu lateral
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});