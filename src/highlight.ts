import hljs from 'highlight.js';

export class Highlight {
    constructor() {
        /*['javascript', 'python', 'bash'].forEach((langName) => {
            // Using require() here because import() support hasn't landed in Webpack yet
            const langModule = require(`highlight.js/lib/languages/${langName}`);
            hljs.registerLanguage(langName, langModule);
        });*/

    }

    init() {
        hljs.highlightAll();
    }
}//import hljs from '@highlightjs/cdn-assets/';
