function toggle_overlay() {
    const overlay = document.getElementById("nav-overlay");
    //console.log(overlay.style.display);
    overlay.style.display = overlay.style.display == "block" ? "none" : "block";
}

const overlay_open = document.getElementById("overlay-open");
const overlay_close = document.getElementById("overlay-close");
overlay_close.onclick = toggle_overlay;
overlay_open.onclick = toggle_overlay;