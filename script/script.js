const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");

dropdownButton.addEventListener("click", function () {
    if (dropdownContent.classList.contains("hidden")) {
        dropdownContent.classList.remove("hidden");
    } else {
        dropdownContent.classList.add("hidden");
    }
});
