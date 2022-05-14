export class Filters {
    constructor() { }

    filterWordToHide(selector: string, word: string) {
        const selectors = Array.from(document.querySelectorAll(selector));
        const filter = word.toUpperCase();

        for (var i = 0; i < selectors.length; i++) {
            let selector: Element = selectors[i];
            let value: string = '';
            if (selector) {
                value = selector.getAttribute('class') as string;
                if (value.toUpperCase().indexOf(filter) > -1) {
                    selector.parentElement!.style.display = "";
                } else {
                    selector.parentElement!.style.display = "none";
                }
            }
        }
    }
}