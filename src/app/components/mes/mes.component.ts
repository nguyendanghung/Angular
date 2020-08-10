import { MesService } from './../../services/mes.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.scss']
})
export class MesComponent implements OnInit {

  constructor(public mesService: MesService) { }

  ngOnInit(): void {
  }

}
