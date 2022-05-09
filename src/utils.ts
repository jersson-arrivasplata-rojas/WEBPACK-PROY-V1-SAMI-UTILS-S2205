export class Utils {
    constructor() { }

    hello(world: string = 'world'): string {
        return `Hello ${world}! `;
    }
    downloadCanvasToImage(canvas: HTMLCanvasElement, filename: string) {
        const image = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = filename;
        link.href = image;
        link.click();
        //link.delete;
    }
}