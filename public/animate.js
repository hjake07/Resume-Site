let showing = false;
function toggleShowing(){
    if(showing ===false){
        showing = true;
        document.getElementById("html").className = 'loadInText';
        document.getElementById("css").className = 'loadInText';
        document.getElementById("js").className = 'loadInText';
        document.getElementById("react").className = 'loadInText';
        document.getElementById("node").className = 'loadInText';
        document.getElementById("angular").className = 'loadInText';
        document.getElementById("express").className = 'loadInText';
        document.getElementById("typescript").className = 'loadInText';
        document.getElementById("php").className = 'loadInText';
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
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.className = 'fadingtext'
        observer.unobserve(entry.target);
      }
    });
  }
  
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.5,
  });
  
  const fadeElements = document.querySelectorAll(".fade-in");
  
  fadeElements.forEach((element) => {
    observer.observe(element);
  });
  
  
  