let showing = false;
function toggleShowing(){
    if(showing ===false){
        showing = true;
        document.getElementById("html").className = 'fadingtext';
        document.getElementById("css").className = 'fadingtext';
        document.getElementById("js").className = 'fadingtext';
        document.getElementById("react").className = 'fadingtext';
        document.getElementById("node").className = 'fadingtext';
        document.getElementById("angular").className = 'fadingtext';
        document.getElementById("express").className = 'fadingtext';
        document.getElementById("typescript").className = 'fadingtext';
        document.getElementById("php").className = 'fadingtext';
        document.getElementById("morebutton").innerHTML = "Less Details"

    }
    else {
        showing = false;
        document.getElementById("html").className = 'hidden';
        document.getElementById("css").className = 'hidden';
        document.getElementById("js").className = 'hidden';
        document.getElementById("react").className = 'hidden';
        document.getElementById("node").className = 'hidden';
        document.getElementById("angular").className = 'hidden';
        document.getElementById("express").className = 'hidden';
        document.getElementById("typescript").className = 'hidden';
        document.getElementById("php").className = 'hidden';
        document.getElementById("morebutton").innerHTML = "More Details"
        window.scrollTo(0, 0);

    }
}
function openMtech(){
    window.open('https://mtec.edu/')
}