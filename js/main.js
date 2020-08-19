"use strict";
const colorTyperEl = document.getElementById("color-typer");
const tipEl = document.getElementById("tip");
let firstTip = true;
/**
 * Sets a new color. Updates the body background.
 * @param color The color value to set.
 */
function setNewColor(color) {
    document.body.style.backgroundColor = color;
}
/**
 * Initializes the functionality of the color typer input element.
 */
function initColorInput() {
    const backColorInput = document.getElementById("color-input");
    backColorInput.addEventListener("input", () => {
        // The typed color may be invalid, so make sure the transparent CSS pattern is visible
        document.body.style.backgroundColor = "transparent";
        // Set the new color
        setNewColor(backColorInput.value);
    });
}
/**
 * Initializes the functionality of the color typer close button.
 */
function initCloseButton() {
    // Hide the color typer and show the tip when the user clicks the close button
    const closeButton = document.getElementById("close-typer");
    closeButton.addEventListener("click", (e) => {
        e.stopPropagation();
        colorTyperEl.hidden = true;
        if (firstTip) {
            tipEl.hidden = false;
            firstTip = false;
        }
    });
    // Show the color typer and hide the tip when the user clicks the body
    document.body.addEventListener("click", () => {
        if (colorTyperEl.hidden) {
            colorTyperEl.hidden = false;
            if (tipEl.hidden === false)
                tipEl.hidden = true;
        }
    });
}
// App initialization
initColorInput();
initCloseButton();
//# sourceMappingURL=main.js.map