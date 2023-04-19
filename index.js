const bigButton = document.getElementById('bigbutton');
bigButton.addEventListener('click', changeBackgroundColor);

//Random muted color generator
var randomColor = getRandomColor();
function getRandomColor() {
    var intensity = 100;
    const red = Math.floor(Math.random() * intensity);
    const green = Math.floor(Math.random() * intensity);
    const blue = Math.floor(Math.random() * intensity);
    const alpha = 100;
    return `rgba(${red},${green},${blue},${alpha})`;
}
    
// Change background
function changeBackgroundColor() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', randomColor);
    randomColor = getRandomColor(); //update the var on every button-press
    const text = document.getElementById('text');
    text.textContent = randomColor;
}
