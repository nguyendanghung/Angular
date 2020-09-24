import { User } from './../../interface/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  interval;
  lastNumber: number = 0;
  @Output() intervalFire = new EventEmitter<number>()
  @Input() user: User;
  @Output() delete = new EventEmitter<number>();


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }


  deleteUser($event, id: number): void {
    $event.stopPropagation();
    this.delete.emit(id)
  }

  testInterval($event) {
    $event.stopPropagation();
    this.interval = setInterval(() => {
      this.intervalFire.emit(this.lastNumber + 1)
      this.lastNumber++
    }, 1000)
  }

  clear($event) {
    $event.stopPropagation();
    clearInterval(this.interval)
  }

}
