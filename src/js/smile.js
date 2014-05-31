
window.smiler = function (window, containerElem, sliderElem) {
  function sliderMouseDownListener(event) {
    sliderElem.removeEventListener('mousedown', sliderMouseDownListener);
    sliderElem.addEventListener('mousemove', sliderMouseMoveListener);
  }

  function sliderMouseUpListener(event) {
    var newDValue;

    sliderElem.addEventListener('mousedown', sliderMouseDownListener);
    sliderElem.removeEventListener('mousemove', sliderMouseMoveListener);
    newDValue = getMouthDValue(mouthElem.getAttribute('d'), mouthBaseYValue + Math.round(mouthBoundValue  * (sliderElem.value / 100)));
    mouthElem.setAttribute('d', newDValue);
  }

  function sliderMouseMoveListener(event) {
    var newDValue = getMouthDValue(mouthElem.getAttribute('d'), mouthBaseYValue + Math.round(mouthBoundValue  * (sliderElem.value / 100)));
    mouthElem.setAttribute('d', newDValue);
  }

  function getMouthDValue(dValue, newValue) {
    var pathDReplacerRegExp = /(M[\d]+,[\d]+ Q[\d]+,)-?[\d]+( [\d]+ [\d]+)/ig;
    var dParts = pathDReplacerRegExp.exec(dValue);
    return dParts[1] + newValue + dParts[2];
  }

  var mouthBaseYValue = 0;
  var mouthBoundValue = 100;
  var mouthElem = containerElem.querySelector('svg path.mouth');

  sliderElem.addEventListener('mousedown', sliderMouseDownListener);
  sliderElem.addEventListener('mouseup', sliderMouseUpListener);
};
