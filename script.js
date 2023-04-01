window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: {
            value: 255
        }
    };
    let colorPickers = document.getElementsByClassName("Picker");
    setColorPickerEventListeners(element, rgb, colorPickers);
}

function setColorPickerEventListeners(element, colors, pickerElements) {
    let pickerLen = pickerElements.Length;
    for (let i = 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener('change', () => {
            let red = color.red.value;
            let green = color.green.value;
            let blue = color.blue.value;
            setElementBGColor(element, red, green, blue);
            setDisplayValues(red, green, blue)
        });
        }
    }

    function setElementBGColor(bgElement, red, green, blue) {
        let rgbVal = [red, green, blue].join(',');
        bgElement.style.backgroundColor = "rgb(" + rgbVal + ");";
    }

    function setDisplayValues(red, green, blue) {
        let redVal = document.getElementById("redVal");
        let greenVal = document.getElementById("greenVal");
        let blueVal = document.getElementById("blueVal");

        redVal.innerText= red;
        blueVal.innerText= green;
        blueVal.innerText= blue;
    }