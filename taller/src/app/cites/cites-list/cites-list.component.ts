import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { CitesService } from '../cites.service';

@Component({
  selector: 'app-cites-list',
  templateUrl: './cites-list.component.html'
})
export class CitesListComponent implements OnInit {

  cites: Cita[];

  constructor(private citesService: CitesService) { }

  ngOnInit() {
    this.citesService.getCites().subscribe(
      cites => this.cites = cites
    )
  }

}
