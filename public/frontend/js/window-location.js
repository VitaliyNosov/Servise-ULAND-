var isInIFrame = (window.location != window.parent.location);
    if(isInIFrame==true){
        document.querySelector('header').style.display = "none";
        document.querySelector('footer').style.display = "none";
        document.getElementById('come-back').style.display = "none";
}

