import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cita } from '../cita';
import { CitesService } from '../cites.service';

@Component({
  selector: 'app-cites-detail',
  templateUrl: './cites-detail.component.html'
})
export class CitesDetailComponent implements OnInit {

  cita: Cita;

  constructor(private activatedRouted: ActivatedRoute,
    private citesService: CitesService) { }

  ngOnInit() {
    this.activatedRouted.params.subscribe(c => {
      this.citesService.getCita(c.id).subscribe(cita => this.cita = cita)
    });
  }

}
