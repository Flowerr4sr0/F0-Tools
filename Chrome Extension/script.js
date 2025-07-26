function csm() {
    var x = document.getElementById("comingsoon");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}