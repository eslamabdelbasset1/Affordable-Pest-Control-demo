
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


let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(-33.91722, 151.23064),
        zoom: 16,
    });

    const iconBase =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
    const icons = {
        parking: {
            icon: iconBase + "parking_lot_maps.png",
        },
        library: {
            icon: iconBase + "library_maps.png",
        },
        info: {
            icon: iconBase + "info-i_maps.png",
        },
    };
    const features = [
        {
            position: new google.maps.LatLng(-33.91721, 151.2263),
            type: "text",
        },
        {
            position: new google.maps.LatLng(-33.91539, 151.2282),
            type: "text",
        },
        {
            position: new google.maps.LatLng(-33.91872, 151.23089),
            type: "text",
        },
        {
            position: new google.maps.LatLng(-33.91784, 151.23094),
            type: "text",
        },
        {
            position: new google.maps.LatLng(-33.91682, 151.23149),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.9179, 151.23463),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.91666, 151.23468),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.916988, 151.23364),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
            type: "parking",
        },
        {
            position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
            type: "parking",
        }
    ];

    // Create markers.
    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
        });
    }
}



