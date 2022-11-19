
























document.querySelector('.nav-toggle').addEventListener("click", ()=> {
    document.body.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link =>{
    link.addEventListener("click", () =>{
        document.body.classList.remove('nav-open');
    });
});