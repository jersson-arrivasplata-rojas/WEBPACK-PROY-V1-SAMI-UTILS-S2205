import html2canvas from 'html2canvas';
import { IHtmlCanvas } from './interfaces/html-canvas.interface';
import { Utils } from './utils';

export class HtmlToCanvas {
    constructor() { }
    generateHtmlToCanvas(data: IHtmlCanvas) {
        const content = document.getElementById(data.id);
        html2canvas(data.element, {
            allowTaint: true,
            logging: true,
            width: data.measures.width,
            height: data.measures.height,
            scale: 3,
            useCORS: false,
        }).then(canvas => {
            canvas.id = "canvas";
            content!.innerHTML = ""
            content!.appendChild(canvas);
            return canvas;
        }).then(canvas => {
            let imageName = "layout_" + new Date().getTime() + ".png";
            new Utils().downloadCanvasToImage(canvas, imageName);
        });

    }
}
//taintTest: true,