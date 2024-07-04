document.addEventListener("DOMContentLoaded", function () {
  // Toggle dropdown content visibility on input click
  document
    .querySelectorAll(".dropdown input[type='text']")
    .forEach(function (input) {
      input.addEventListener("click", function () {
        let dropdownContent =
          this.parentNode.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("show");
      });
    });

  // Handle selection of dropdown options
  document.querySelectorAll(".dropdown-content a").forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      let selectedText = this.textContent;
      let dropdownInput =
        this.closest(".dropdown").querySelector("input[type='text']");
      dropdownInput.value = selectedText;
      this.closest(".dropdown-content").classList.remove("show");
    });
  });

  // Close dropdown if user clicks outside
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown input[type='text']")) {
      document
        .querySelectorAll(".dropdown-content")
        .forEach(function (dropdown) {
          dropdown.classList.remove("show");
        });
    }
  });
});
