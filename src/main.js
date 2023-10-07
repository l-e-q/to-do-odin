import { createHtmlElement } from "./index";

function render() {
    const main = createHtmlElement('main', '', ['main'], '');
    document.body.appendChild(main);

    const mainContent = createHtmlElement('div', 'contnet', [], 'AAAA');
    main.appendChild(mainContent);
}

export { render as renderMain }
