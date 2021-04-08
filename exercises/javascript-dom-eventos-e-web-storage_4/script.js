let body = document.body;

let backgroundInput = document.getElementById('background');
let backgroundButton = document.getElementById('btn-B');

let fontBackgroundInput = document.getElementById('backgroundFont');
let fontBackgroundButton = document.getElementById('btn-BF');

let fontSizeInput = document.getElementById('fontSize');
let fontSizeButton = document.getElementById('btn-FS');

let fontFamilyInput = document.getElementById('fontFamily');
let fontFamilyButton = document.getElementById('btn-FF');

let lineHeightInput = document.getElementById('lineHeight');
let lineHeightButton = document.getElementById('btn-LH');

/* FUNCTIONS */ 
function backgroundColorChange() {
    backgroundButton.addEventListener('click', function() {
        if (body.style.backgroundColor === 'white') {
            body.style.backgroundColor = backgroundInput.value;
        } else {
            body.style.backgroundColor = 'white'
        }
    });
    
}

function fontColorChange() {
    fontBackgroundButton.addEventListener('click', function() {
        if (body.style.color === 'darkslategrey') {
            body.style.color = fontBackgroundInput.value;
        } else {
            body.style.color = 'darkslategrey';
        }
    });
}

function fontSizeChange() {
    fontSizeButton.addEventListener('click', function() {
        if (body.style.fontSize === '15px') {
            body.style.fontSize = fontSizeInput.value + 'px';
        } else {
            body.style.fontSize = '15px';
        }
    });
}

function fontFamilyChange() {
    fontFamilyButton.addEventListener('click', function() {
        if (body.style.fontFamily.includes('Arial')) {
            body.style.fontFamily = fontFamilyInput.value;
        } else {
            body.style.fontFamily = 'Arial, Helvetica, sans-serif';
        }
    });
}

function lineHeightChange() {
    lineHeightButton.addEventListener('click', function() {
        if (body.style.lineHeight === '30px') {
            body.style.lineHeight = lineHeightInput.value + 'px';
        } else {
            body.style.lineHeight = '30px';
        }
    });
}

backgroundColorChange()
fontColorChange()
fontSizeChange()
fontFamilyChange()
lineHeightChange()