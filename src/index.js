import { renderHeader } from "./header";
import { renderFooter } from "./footer";
import "./styles/style.css";
import "./img/github-mark.svg"

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
