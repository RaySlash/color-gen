const bigButton = document.getElementById('bigbutton');
bigButton.addEventListener('click', changeBackgroundColor);

const sourceButton = document.getElementById('source');
sourceButton.addEventListener('click', goToGithub);

// Random Color Generator
function getRandomColor() {
    const intensity = 100;
    const red = Math.floor(Math.random() * intensity);
    const green = Math.floor(Math.random() * intensity);
    const blue = Math.floor(Math.random() * intensity);
    const alpha = 1;
    return `{"red":"${red}", "green":"${green}", "blue":"${blue}", "alpha":"${alpha}"}`;
}

var temp = getRandomColor();
var obj = JSON.parse(temp);
var backgroundColor = `rgba(${obj.red}, ${obj.green}, ${obj.blue}, ${obj.alpha})`;
var textColor = `rgba(${255 - obj.red}, ${255 - obj.green}, ${255 - obj.blue}, ${obj.alpha})`;

// Change background
function changeBackgroundColor() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color',backgroundColor);
    temp = getRandomColor();
    obj = JSON.parse(temp);
    backgroundColor = `rgba(${obj.red}, ${obj.green}, ${obj.blue}, ${obj.alpha})`;
    textColor = `rgba(${255 - obj.red}, ${255 - obj.green}, ${255 - obj.blue}, ${obj.alpha})`; // re-inistalize
    //main text
    const mainText = document.getElementById('text');
    mainText.textContent = textColor;
    mainText.style.setProperty('color',textColor);
    //bg-text
    const bgText = document.getElementById('bg-text');
    bgText.textContent = backgroundColor
    bgText.style.setProperty('color',textColor);
}

// Link to git
function goToGithub() {
    location.href = 'https://github.com/RaySlash/color-gen';
}
