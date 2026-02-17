// ===============================================
// EVENT BUBBLING
// ===============================================

const ul = document.querySelector("ul");
const li = document.querySelector("li");

ul.addEventListener("click", function () {
    console.log("UL");
});

li.addEventListener("click", function (event) {
    console.log("LI");
    // event.stopPropagation(); // Evita que suba a UL
});
