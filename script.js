'use strict';

const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function() {elementToggleFunc(sidebar); });


// Testi Var
const testimonialsItem = document.querySelectorAll("[data-testimonial-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal Var
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal Toggle Func
const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonial-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonial-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonial-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonial-text]").innerHTML;

        testimonialsModalFunc();
        
    });
}

// close
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// custom select variable
const select = document.querySelector ("[data-select]");
const selectItem = document.querySelectorAll ("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");

select.addEventListener("click", function() {elementToggleFunc(this);});


// add event in all select items
for (let i = 0; i < selectItem.length; i++) {
    selectItem[i].addEventListener("click", function () {
  
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
  
    });
  }


// filter var  
const filterItem = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItem.length; i++) {

        if (selectedValue === "all") {
            filterItem[i].classList.add("active");
        } else if (selectedValue === filterItem[i].dataset.category) {
            filterItem[i].classList.add("active");
        } else {
            filterItem[i].classList.remove("active");
        }
    
      }
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



const navigationLinks = document.querySelectorAll("[data-nav-link]")
const pages = document.querySelectorAll("[data-page]")


for (let i  = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function() {

    for (let i = 0; i < pages.length; i++) {
     if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
      pages[i].classList.add("active");
      navigationLinks[i].classList.add("active")
      window.scrollTo(0, 0);
     } else {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active")
     }
      
    }
  })
}