const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    icon.classList.replace("fa-moon","fa-sun");

}

toggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        icon.classList.replace("fa-moon","fa-sun");

        localStorage.setItem("theme","dark");

    }else{

        icon.classList.replace("fa-sun","fa-moon");

        localStorage.setItem("theme","light");

    }

});

const educationToggles = document.querySelectorAll(".education-toggle");

educationToggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

        toggle.classList.toggle("active");

        const body = toggle.closest(".education-card")
                           .querySelector(".education-body");

        body.classList.toggle("show");

    });

});

const gallery = document.getElementById("archiveGallery");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function scrollAmount(){

    const item = gallery.querySelector(".archive-item");

    const gap = parseInt(getComputedStyle(gallery).gap);

    return item.offsetWidth + gap;

}

next.addEventListener("click",()=>{

    gallery.scrollBy({
        left:scrollAmount(),
        behavior:"smooth"
    });

});

prev.addEventListener("click",()=>{

    gallery.scrollBy({
        left:-scrollAmount(),
        behavior:"smooth"
    });

});