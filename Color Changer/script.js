const pad1 = document.querySelector('.pad1');
const pad2 = document.querySelector('.pad2');
const pad3 = document.querySelector('.pad3');
const colorButtons = document.querySelectorAll('.color');

function pickColor(element, targetPad) {
  const computedStyle = window.getComputedStyle(element);
  const backgroundColor = computedStyle.backgroundColor;
  targetPad.style.backgroundColor = backgroundColor;
}

function mixColor() {
  const color1 = getColorFromButton(pad1);
  const color2 = getColorFromButton(pad2);

  const mixedColor = mixColors(color1, color2);
  pad3.style.backgroundColor = mixedColor;
}

function getColorFromButton(button) {
  const computedStyle = window.getComputedStyle(button);
  return computedStyle.backgroundColor;
}

function mixColors(color1, color2) {
  const rgb1 = getRGB(color1);
  const rgb2 = getRGB(color2);

  const mixedRGB = [
    Math.round((rgb1[0] + rgb2[0]) / 2),
    Math.round((rgb1[1] + rgb2[1]) / 2),
    Math.round((rgb1[2] + rgb2[2]) / 2),
  ];

  return `rgb(${mixedRGB[0]}, ${mixedRGB[1]}, ${mixedRGB[2]})`;
}

function getRGB(color) {
  const rgbaValues = color.replace(/[^\d,.]/g, '').split(',');
  return [
    parseInt(rgbaValues[0]),
    parseInt(rgbaValues[1]),
    parseInt(rgbaValues[2]),
  ];
}

colorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetPad = button.parentNode.previousElementSibling;
    pickColor(button, targetPad);
  });
});

document
  .getElementById('mix-btn')
  .addEventListener('click', mixColor);
