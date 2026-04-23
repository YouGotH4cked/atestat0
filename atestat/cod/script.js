const anCurent = document.getElementById("anCurent");

if (anCurent) {
    anCurent.textContent = new Date().getFullYear();
}

const TOP_BAR_HEIGHT = 60;
const cardNavs = Array.from(document.querySelectorAll("[data-card-nav]"));

const setCardNavState = (nav, open) => {
    const content = nav.querySelector(".card-nav-content");
    const hamburger = nav.querySelector(".hamburger-menu");

    nav.classList.toggle("open", open);
    nav.style.height = open && content ? `${TOP_BAR_HEIGHT + content.scrollHeight}px` : `${TOP_BAR_HEIGHT}px`;

    if (hamburger) {
        hamburger.setAttribute("aria-expanded", String(open));
    }

    if (content) {
        content.setAttribute("aria-hidden", String(!open));
    }

};

cardNavs.forEach(nav => {
    const openByDefault = nav.dataset.open === "true";
    const toggle = () => setCardNavState(nav, !nav.classList.contains("open"));

    nav.querySelectorAll(".hamburger-menu").forEach(button => {
        button.addEventListener("click", toggle);
    });

    setCardNavState(nav, openByDefault);
});

window.addEventListener("resize", () => {
    cardNavs.forEach(nav => {
        setCardNavState(nav, nav.classList.contains("open"));
    });
});

window.addEventListener("load", () => {
    cardNavs.forEach(nav => {
        setCardNavState(nav, nav.classList.contains("open"));
    });

    requestAnimationFrame(() => {
        document.body.classList.add("page-loaded");
    });
});
