var menuIcon=document.getElementById("menuIcon")
var sideNav=document.getElementById("sidenav")
var closeNav=document.getElementById("closeNav")
menuIcon.addEventListener("click",function(){
    sideNav.style.right=0
})
closeNav.addEventListener("click",function(){
    sideNav.style.right="-50%"
})
