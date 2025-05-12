document.addEventListener("DOMContentLoaded", () => {
  const textbox = document.getElementById("textBox");
  const charDisplay = document.getElementById("character");
  const wordDisplay = document.getElementById("word");

  // Check if elements exist
  if (!textbox || !charDisplay || !wordDisplay) {
    console.error("One or more elements not found: textBox, character, or word");
    return;
  }

  textbox.addEventListener("input", function () {
    const text = this.value;
    // Character count
    const charCount = text.length;
    charDisplay.textContent = charCount;

    // Word count
    const trimmedText = text.trim();
    const words = trimmedText.split(/\s+/); // Split on any whitespace
    const cleanWords = words.filter((word) => word !== "");
    wordDisplay.textContent = cleanWords.length;
  });
});