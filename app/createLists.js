"use strict";

function createListElement(text, element) {
  const list = document.createElement("li");
  list.textContent = text;
  element.appendChild(list);
}

function removeHtml(element) {
  while (element.firstChild) element.removeChild(element.firstChild);
}

export { createListElement, removeHtml };
