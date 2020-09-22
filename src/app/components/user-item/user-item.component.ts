import { User } from './../../interface/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;
  @Output() delete = new EventEmitter<number>();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }


  deleteUser($event, id: number): void {
    $event.stopPropagation();
    this.delete.emit(id)
  }

}
