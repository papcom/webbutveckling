function toggle() {
    var el = document.getElementById("style1");
    if (el.href.match("style.css")) {
        el.href = "styledark.css";
    }
    else {
        el.href = "style.css";
    }
}