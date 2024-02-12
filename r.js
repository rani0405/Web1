//autoScroll
// const autoScroll=()=>{
//     window.scrollBy(0,5);
//     let scrolldelay=setTimeout
//     (autoScroll,10)
// }
// autoScroll();

//bottom to top
window.addEventListener("scroll",function(){
    var scroll=this.document.querySelector(".scrollTop");
    scroll.classList.toggle("active",window.scrollY > 500)
})
function scrollToTop(){
    window.scrollTo({
        top:0
        // behavior:'smooth'
    })
}


