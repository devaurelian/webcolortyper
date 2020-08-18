const mainEl = document.getElementById("main");
const tipEl = document.getElementById("tip");
let firstTip = true;

function initColorInput() {
  const backColorInput = document.getElementById("color-input") as HTMLInputElement;
  backColorInput?.addEventListener("input", () => {

    document.body.style.backgroundColor = "transparent";

    const color = backColorInput.value;

    // Update the background color of the body
    document.body.style.backgroundColor = color;
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