var darkModeSlider = document.getElementById('dark-mode-slider');
var darkModeButton = document.getElementById('dark-mode-button');
var windowsLogo =  document.getElementsByClassName('downloadImage');
var body = document.body;


var buttonClicked = false;

darkModeButton.onclick = function() {
    if(buttonClicked == false) {
    darkModeButton.style.backgroundColor = "white";
    darkModeButton.style.transition = '1s'
    darkModeSlider.style.backgroundColor = "black";
    darkModeSlider.style.transform = 'translate(0px, 4.5vh)';
    darkModeSlider.style.transition = 'transform .4s ease-in-out'
    body.style.backgroundColor = "black";
    body.style.transition = '1s';
    windowsLogo[0].style.filter = "invert(100%)";

    buttonClicked = true;
    }else if(buttonClicked == true) {
    darkModeButton.style.backgroundColor = "black";
    darkModeButton.style.transition = '1s'
    darkModeSlider.style.backgroundColor = "white";
    darkModeSlider.style.transform = 'translate(0px, -2.2px)';
    darkModeSlider.style.transition = 'transform .4s ease-in-out'
    windowsLogo[0].style.filter = "invert(0%)";
    body.style.backgroundColor = "white";
    body.style.transition = '1s';  

    buttonClicked = false;  
    }
}
