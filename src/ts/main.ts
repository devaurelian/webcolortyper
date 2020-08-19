const mainEl = document.getElementById("main");
const tipEl = document.getElementById("tip");
let firstTip = true;
const themeColorMeta = <HTMLMetaElement>document.querySelector("meta[name=theme-color]");

/**
 * Set a new color. Update the body background and the theme-color meta attribute.
 * @param color The color value to set.
 */
function setNewColor(color: string) {
  document.body.style.backgroundColor = color;
  themeColorMeta.setAttribute("content", color);
}

function initColorInput() {
  const backColorInput = document.getElementById("color-input") as HTMLInputElement;
  backColorInput?.addEventListener("input", () => {

    // The typed color may be invalid, so make sure the transparent CSS pattern is visible
    document.body.style.backgroundColor = "transparent";

    // Set the new color
    setNewColor(backColorInput.value)
  });
}

function hideDialog() {
  if (mainEl) {
    mainEl.hidden = true;
    if (tipEl) tipEl.hidden = false;
  }
}

function initCloseSettings() {

  const closeButton = document.getElementById("close-settings");
  closeButton?.addEventListener("click", () => {
    // if (mainEl) mainEl.hidden = true;
    if (mainEl) {
      mainEl.hidden = true;
      if (tipEl && firstTip) { 
        tipEl.hidden = false;
        firstTip = false;
      }
    }
  });

  document.body.addEventListener("click", (e) => {
    
    if (mainEl?.hidden && e.target === document.body) {
    // if (mainEl?.hidden) {
      console.log(e.target);
      mainEl.hidden = false;
      if (tipEl?.hidden === false) tipEl.hidden = true;
    }

    // e.cancelBubble = true;
    // mainEl.hidden = !mainEl.hidden;

  // if (mainEl && e.target === document.body) {
  //     // e.preventDefault();
  //     e.cancelBubble = true;
  //     mainEl.hidden = !mainEl.hidden;
  //   }
    // if (mainEl?.hidden) mainEl.hidden = false;
  });
}

initColorInput();
initCloseSettings();