import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { switchMap, share, map } from 'rxjs/operators';
import { ServiceComponent, ColorService } from '../../service';
import { MoveDetail, TypeRef } from '../../interfaces';

@Component({
    selector: 'app-move-card',
    templateUrl: './move-cards.component.html',
  styleUrls: ['./move-cards.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoveCardsComponent implements OnInit {

    moveData$: Observable<MoveDetail>;
    moveName$: Observable<string>;
    types$: Observable<Array<TypeRef>>;

    constructor(
        private _api: ServiceComponent,
        private _color: ColorService,
        private _router: Router,
        private _actRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.moveData$ = this._actRoute.paramMap.pipe(
            switchMap((params: ParamMap) => this._api.getMoveDetailByNumber(+params.get('id'))),
            share()
        );

        this.moveName$ = this.moveData$.pipe(
            map((moveData: MoveDetail) => moveData.name)
        );

        this.types$ = this.moveData$.pipe(
            map(moveData => new Array<TypeRef>(moveData.type))
        );

    }

}