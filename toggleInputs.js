
function changeVariableValue1() {
  document.documentElement.style.setProperty('--color-mainBackground','hsl(222, 26%, 31%)');
  document.documentElement.style.setProperty('--color-toggleBackgroundKeypadBackground','hsl(223, 31%, 20%)');
  document.documentElement.style.setProperty('--color-screenBackground','hsl(224, 36%, 15%)');
  document.documentElement.style.setProperty('--color-keyBackgroundN','hsl(225, 21%, 49%)');
  document.documentElement.style.setProperty('--color-keyShadowN','hsl(224, 28%, 35%)');
  document.documentElement.style.setProperty('--color-keyBackgroundToggleP','hsl(6, 63%, 50%)');
  document.documentElement.style.setProperty('--color-keyShadowP','hsl(6, 70%, 34%)');
  document.documentElement.style.setProperty('--color-keyBackgroundR','hsl(30, 25%, 89%)');
  document.documentElement.style.setProperty('--color-keyShadowR','hsl(28, 16%, 65%)');
  document.documentElement.style.setProperty('--color-VeryDarkGrayishBlue','hsl(221, 14%, 31%)');
  document.documentElement.style.setProperty('--color-White','hsl(0, 0%, 100%)');
}

function changeVariableValue2() {
  document.documentElement.style.setProperty('--color-mainBackground','hsl(0, 0%, 90%)');
  document.documentElement.style.setProperty('--color-toggleBackgroundKeypadBackground','hsl(0, 5%, 81%)');
  document.documentElement.style.setProperty('--color-screenBackground','hsl(0, 0%, 93%)');
  document.documentElement.style.setProperty('--color-keyBackgroundN','hsl(185, 42%, 37%)');
  document.documentElement.style.setProperty('--color-keyShadowN','hsl(185, 58%, 25%)');
  document.documentElement.style.setProperty('--color-keyBackgroundToggleP','hsl(25, 98%, 40%)');
  document.documentElement.style.setProperty('--color-keyShadowP',' hsl(25, 99%, 27%)');
  document.documentElement.style.setProperty('--color-keyBackgroundR','hsl(45, 7%, 89%)');
  document.documentElement.style.setProperty('--color-keyShadowR','hsl(35, 11%, 61%)');
  document.documentElement.style.setProperty('--color-VeryDarkGrayishBlue','hsl(60, 10%, 19%)');
  document.documentElement.style.setProperty('--color-White','hsl(60, 10%, 19%)');
}

function changeVariableValue3() {
  document.documentElement.style.setProperty('--color-mainBackground','hsl(268, 75%, 9%)');
  document.documentElement.style.setProperty('--color-toggleBackgroundKeypadBackground','hsl(268, 71%, 12%)');
  document.documentElement.style.setProperty('--color-screenBackground','hsl(281, 89%, 26%)');
  document.documentElement.style.setProperty('--color-keyBackgroundN','hsl(285, 91%, 52%)');
  document.documentElement.style.setProperty('--color-keyShadowN','hsl(185, 58%, 25%)');
  document.documentElement.style.setProperty('--color-keyBackgroundToggleP','hsl(176, 100%, 44%)');
  document.documentElement.style.setProperty('--color-keyShadowP',' hsl(177, 92%, 70%)');
  document.documentElement.style.setProperty('--color-keyBackgroundR','hsl(268, 47%, 21%)');
  document.documentElement.style.setProperty('--color-keyShadowR','hsl(290, 70%, 36%)');
  document.documentElement.style.setProperty('--color-VeryDarkGrayishBlue','hsl(52, 100%, 62%)');
  document.documentElement.style.setProperty('--color-White','hsl(52, 100%, 62%)');
}

  function toogleThema() {
    var slider = document.getElementById("slider");
    var value = slider.value;
    var root = document.documentElement;
    var sheets = document.styleSheets;
    
    if (value == 1) {
      changeVariableValue1()
    } else if (value == 2) {
      changeVariableValue2()
    } else if (value == 3) {
      changeVariableValue3()
    }
  }
