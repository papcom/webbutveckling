function toggle() {
    var toggle = document.getElementById("style1");
    if (toggle.href.match("style.css")) {
        toggle.href = "styledark.css";
    }
    else {
        toggle.href = "style.css";
    }
}