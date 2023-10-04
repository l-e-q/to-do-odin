import { renderHeader } from "./header";
import { renderFooter } from "./footer";

function createHtmlElement(tag, id, arrayClasses, content) {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (arrayClasses) {
        arrayClasses.forEach((Class) => {
            element.classList.add(Class)
        });

    }
    if (content) element.innerText = content;
    return element;
}

renderHeader();
renderFooter();

export { createHtmlElement }
