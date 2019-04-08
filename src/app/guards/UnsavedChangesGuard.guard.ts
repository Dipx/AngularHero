import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { LinksComponent } from '../links/links.component';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<LinksComponent> {
    constructor() {}

    canDeactivate(component: LinksComponent) {
        if(!!component.linkUpdateFormGroup && component.linkUpdateFormGroup.dirty){
            return window.confirm("Vous avez des changements non sauvegardés, Etes vous sur de vouloir quitter ?");
        } else {
            return true;
        }
    }
}