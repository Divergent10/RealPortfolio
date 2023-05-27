window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.border.radius = "200px";
        document.getElementById("navbar").style.border = "none";
        document.getElementById("navbar").style.backgroundColor =  "#908a7623";
    }else{
        document.getElementById("navbar").style.border.radius = "none";
        document.getElementById("navbar").style.border = "none";
        document.getElementById("navbar").style.backgroundColor = "#070831";
    }  
}