function toggle() {
    var toggle = document.getElementById("css1");
    if (toggle.href.match("style.css")) {
        toggle.href = "styledark.css";
        console.log("Dark mode activated");
    }
    else {
        toggle.href = "style.css";
        console.log("Light mode activated");
    }
}
