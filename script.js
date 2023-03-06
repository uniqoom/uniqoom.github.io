/* SWIPER */
const swiper = new Swiper('.swiper', {
// Optional parameters
loop: true,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
},
});


/* BUTTON VIEW ALL BRANDS */
let allViewRepairBrandsButton = document.querySelector(".repair-brands__all-view");
let allViewRepairBrandsButtonImg = document.querySelector(".repair-brands__all-view-ico");
let allViewRepairBrandsButtonText = document.querySelector(".repair-brands__all-view-text");
let repairBrandsButtonViews = document.querySelectorAll(".repair-brands__view");

allViewRepairBrandsButton.addEventListener("click", function () {
    for (let i = 0; i < repairBrandsButtonViews.length; i += 1) {
        repairBrandsButtonViews.item(i).classList.toggle("repair-brands__hidden");
    }
    if (allViewRepairBrandsButtonText.textContent == "Показать все") {
        allViewRepairBrandsButtonText.textContent = "Скрыть все";
        allViewRepairBrandsButtonImg.style.transform = "rotate(180deg)";
    } else {
        allViewRepairBrandsButtonText.textContent = "Показать все";
        allViewRepairBrandsButtonImg.style.transform = "rotate(0deg)";
    }
});

/* BUTTON VIEW ALL TYPE */
let allViewRepairTypeButton = document.querySelector(".repair-type__all-view");
let repairTypesButtonViews = document.querySelectorAll(".repair-type__view");
let allViewRepairTypeButtonImg = document.querySelector(".repair-type__all-view-ico");
let allViewRepairTypeButtonText = document.querySelector(".repair-type__all-view-text");

allViewRepairTypeButton.addEventListener("click", function () {
    for (let i = 0; i < repairTypesButtonViews.length; i += 1) {
        repairTypesButtonViews.item(i).classList.toggle("repair-type__hidden");
    }
    if (allViewRepairTypeButtonText.textContent == "Показать все") {
        allViewRepairTypeButtonText.textContent = "Скрыть все";
        allViewRepairTypeButtonImg.style.transform = "rotate(180deg)";
    } else {
        allViewRepairTypeButtonText.textContent = "Показать все";
        allViewRepairTypeButtonImg.style.transform = "rotate(0deg)";
    }
});



