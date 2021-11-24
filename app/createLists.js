"use strict";

function createListElement(text, element) {
  //create list elements and add text to it
  const list = document.createElement("li");
  list.textContent = text;
  list.style.fontSize = "1.5rem";
  element.appendChild(list);
}

function removeHtml(element) {
  //remove current text on page
  while (element.firstChild) element.removeChild(element.firstChild);
}

export { createListElement, removeHtml };
