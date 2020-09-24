import { User } from './../../interface/user';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: Array<User> = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTopUsers();
  }

  getTopUsers(): void{
    this.apiService.getUsers().subscribe((users: any) => this.users = users.slice(0, 5));
  }

}
