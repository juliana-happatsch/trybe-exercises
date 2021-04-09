let body = document.body;

/* FUNCTIONS */ 
window.onload = function() {
  function backgroundColorChange() {
    let backgroundInput = document.getElementById('background');
    let backgroundButton = document.getElementById('btn-B');

    backgroundButton.addEventListener('click', function() {
        localStorage.setItem('backgroundColor', backgroundInput.value);
        body.style.backgroundColor = backgroundInput.value;
    });

    let background = localStorage.getItem('backgroundColor');
    body.style.backgroundColor = background;
  }

  function fontColorChange() {
    let fontColorInput = document.getElementById('fontColor');
    let fontColorButton = document.getElementById('btn-FC')

    fontColorButton.addEventListener('click', function() {
      localStorage.setItem('fontColor', fontColorInput.value);
      body.style.color = fontColorInput.value;
    });

    let color = localStorage.getItem('fontColor');
    body.style.color = color;
  }

  function fontSizeChange() {
    let fontSizeInput = document.getElementById('fontSize');
    let fontSizeButton = document.getElementById('btn-FS');

    fontSizeButton.addEventListener('click', function() {
      localStorage.setItem('fontSize', fontSizeInput.value + 'px');
      body.style.fontSize = fontSizeInput.value + 'px';
    });

    let fontSize = localStorage.getItem('fontSize');
    body.style.fontSize = fontSize;
  }

  function fontFamilyChange() {
    let fontFamilyInput = document.getElementById('fontFamily');
    let fontFamilyButton = document.getElementById('btn-FF');

    fontFamilyButton.addEventListener('click', function() {
      localStorage.setItem('fontFamily', fontFamilyInput.value);
      body.style.fontFamily = fontFamilyInput.value;
    });

    let fontFamily = localStorage.getItem('fontFamily');
    body.style.fontFamily = fontFamily;
  }

  function lineHeightChange() {
    let lineHeightInput = document.getElementById('lineHeight');
    let lineHeightButton = document.getElementById('btn-LH');

    lineHeightButton.addEventListener('click', function() {
      localStorage.setItem('lineHeight', lineHeightInput.value + 'px');
      body.style.lineHeight = lineHeightInput.value + 'px';
    });

    let lineHeight = localStorage.getItem('lineHeight');
    body.style.lineHeight = lineHeight;
}

  backgroundColorChange();
  fontColorChange();
  fontSizeChange();
  fontFamilyChange();
  lineHeightChange();
}



/*

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

fontColorChange();
fontSizeChange();
fontFamilyChange();
lineHeightChange(); */