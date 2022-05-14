import { SwalFireTwo } from "./swal-fire-two";

export class Clipboard {
    constructor() { }
    copyToClipboard(element: { textContent: string; }, flag:boolean) {
        var aux = document.createElement("input");
        aux.setAttribute("value", element.textContent);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);

        if(flag){
            new SwalFireTwo().swalFireTimerToCopyCode();
        }
    }
}