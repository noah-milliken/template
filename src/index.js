function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.textContent = "Hi";
  element.classList.add("hello");
  return element;
}
