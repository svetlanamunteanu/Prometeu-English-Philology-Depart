function show() {
    document.getElementById("side-menu").classList.toggle("show");
}

function sendEmail() {
    var message=document.getElementById("message").value;
    window.open("mailto:munteanusveta2020@gmail.com?subject=" + nume + "&body=" + message);
}
