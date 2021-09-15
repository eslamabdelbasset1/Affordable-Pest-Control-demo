
$('#nav-toggle').click(()=> {
    $('#logo-small').toggleClass("d-none");
    $('#main-menu').toggleClass("d-none");
    $('#support-menu').toggleClass("d-none");
    $('#logout').toggleClass("d-none");


});

// $(function() {
//     $('.dates #usr1').datepicker({
//         'format': '27 Jun - 6 Jul 2020',
//         'autoclose': true
//     });
// });

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
});



