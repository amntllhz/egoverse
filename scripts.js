document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.querySelector("#copy-button");
  const resiText = document.querySelector("#resi-text");

  copyButton.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah perilaku default anchor tag
    navigator.clipboard
      .writeText(resiText.textContent)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
});
