import { createHtmlElement } from "./index";

function render() {
    const footer = createHtmlElement('footer', 'footer', [], '');
    document.body.appendChild(footer);

    const footerText = createHtmlElement('p', 'footer-text', [], `Copyright © ${new Date().getFullYear()} l-e-q`);
    footer.appendChild(footerText);

    const footerImgLink = createHtmlElement('a', 'footer-img-link', [], '');
    footerImgLink.target = '_blank';
    footerImgLink.href = 'https://github.com/l-e-q';
    footer.appendChild(footerImgLink);

    const footerImg = createHtmlElement('img', 'footer-img', [], '');
    footerImg.src = './img/github-mark.svg';
    footerImgLink.appendChild(footerImg);

}

export { render as renderFooter }