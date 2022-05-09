export class Clipboard {
    constructor() { }
    copyToClipboard(element: { textContent: string; }) {
        var aux = document.createElement("input");
        aux.setAttribute("value", element.textContent);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }
}