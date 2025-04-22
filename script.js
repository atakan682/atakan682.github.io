// You can expand this with animation, validation, etc.

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out!");
        form.reset();
      });
    }
  });
  