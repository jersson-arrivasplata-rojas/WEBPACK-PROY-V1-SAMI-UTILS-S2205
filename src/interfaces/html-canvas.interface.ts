import { IMeasures } from "./measures.interface";

export interface IHtmlCanvas {
    id: string;
    element: HTMLElement;
    measures: IMeasures;
}