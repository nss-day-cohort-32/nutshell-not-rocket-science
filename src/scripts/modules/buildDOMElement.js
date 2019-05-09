module.exports.buildDOMElement = function (tagName, parentElement, id, classArray, attributesObject) {
  let element = document.createElement(tagName);
  if (id) element.id = id;
  if (classArray.length > 0) {
    classArray.forEach(cls => {
      element.classList.add(cls);
    });
  }
  if (attributesObject) {
    for (const key of Object.keys(attributesObject)) {
      element.setAttribute(key, attributesObject[key]);
    }
  }
  return parentElement.appendChild(element);
};