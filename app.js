window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.border.radius = "200px";
        document.getElementById("navbar").style.border = "1px solid white"
    }else{
        document.getElementById("navbar").style.border.radius = "none";
        document.getElementById("navbar").style.border = "none";
    }  
}