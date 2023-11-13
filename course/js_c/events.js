var news;

document.getElementById("header").onclick = changeHeaderColor;
document.getElementById("footer").addEventListener("click", changeFooterColor);
document.getElementById("header").addEventListener("click", addClass);
document.getElementById("header").addEventListener("click", removeClass);

function changeHeaderColor() {
    document.getElementById("header").style.background = "black";
    document.getElementById("header").style.color = "white";
}

function changeFooterColor() {
    document.getElementById("footer").style.background = "black";
    document.getElementById("footer").style.color = "white";
}

function addClass() {
    document.getElementById("header").classList.add("NEWheader");
}

function removeClass() {
    document.getElementById("header").classList.remove("header");
}

