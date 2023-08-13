document.addEventListener("DOMContentLoaded", function() {
    var displayBox = document.querySelector(".display-box");
    var buttons = document.querySelectorAll(".pattern1-button");
    var buttons2 = document.querySelectorAll(".pattern2-button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            if (button.textContent === "AC") {
                displayBox.textContent = ""; // Clear display
            } else if (button.textContent === "C") {
                displayBox.textContent = displayBox.textContent.slice(0, -1); // Remove last character
            } else {
                displayBox.textContent += button.textContent; // Append button value
            }
        });
    });

    buttons2.forEach(function(button) {
        button.addEventListener("click", function() {
            if (button.textContent === "=") {
                try {
                    displayBox.textContent = eval(displayBox.textContent);
                } catch (error) {
                    displayBox.textContent = "Error";
                }
            } else {
                displayBox.textContent += button.textContent;
            }
        });
    });
});
