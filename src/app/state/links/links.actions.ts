import { Action } from "@ngrx/store";

export enum LinksActionType {
    LoadLinks = '[Links] Load Links',
    LinksLoaded = '[Links] Links Loaded'
}

export class LoadLinks implements Action {
    readonly type = LinksActionType.LoadLinks;
    constructor() {}
}

export class LinksLoaded implements Action {
    readonly type = LinksActionType.LinksLoaded;
    constructor(public payload: any) {}
}

export type LinksActions = LoadLinks | LinksLoaded;