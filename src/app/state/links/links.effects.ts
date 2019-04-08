import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { LinkService } from 'src/app/services/Links/link.service';


@Injectable()
export class LinksEffects {
    @Effect()
    loadLinks$ 

    constructor(
        private actions$: Actions,
        private dataPersistance: DataPersistence,
        private linkService: LinkService
    ) {}
}