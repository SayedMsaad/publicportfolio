// const myLink = document.querySelector(".box");
// there is no anchor tag in our HTML file with id "no_link"
// function hello(){
//     console.log('You visited the link');
// }
   
// if (myLink) {
//   myLink.addEventListener("click",hello);
// }

const menu=document.querySelector(".box");
const navi=document.querySelector(".nav");
var x=document.getElementById("navi");
menu.addEventListener("click",()=>{
   const show=navi.getAttribute("aria-expanded");
   
   if(show === "false")
   {
    navi.setAttribute("aria-expanded",true);
    x.classList.add("open");
   }
   else if(show === "true")
   {
    navi.setAttribute("aria-expanded",false);
    x.classList.remove("open");
   }
});
// ue ari-expanded;in index.htnl .nav
// const menu=document.querySelector(".box");
// const navi=document.querySelector(".nav");
// function myFunction() {
//     var x = document.getElementById("nav");
//     if (x.className === "nav") {
//       x.className += " open";
//     } else {
//       x.className = "navbar";
//     }
//   }
