import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeRef } from '../interfaces';
//import { ColorService } from '../service/';

@Component({
  selector: 'app-type-chips',
  templateUrl: './type-chips.component.html',
  styleUrls: ['./type-chips.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeChipsComponent implements OnInit {
  @Input() types: Observable<Array<TypeRef>>;

  constructor() { }

  ngOnInit() {
  }

}
