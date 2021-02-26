import { Component, Input, OnInit } from '@angular/core';
import { Cita } from '../cita';

@Component({
  selector: 'app-cites-item',
  templateUrl: './cites-item.component.html'
})
export class CitesItemComponent implements OnInit {

  @Input() cita: Cita;

  constructor() { }

  ngOnInit() {
  }

}
