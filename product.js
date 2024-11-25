var menuIcon = document.getElementById("menuIcon")
var sideNav = document.getElementById("sidenav")
var closeNav = document.getElementById("closeNav")
menuIcon.addEventListener("click", function () {
    sideNav.style.right = 0
})
closeNav.addEventListener("click", function () {
    sideNav.style.right = "-50%"
})
// Product Search Functionality
var productSection = document.getElementById("productSection");
var search = document.getElementById("search");
var productList = productSection.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();
    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("h2").textContent;
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});


