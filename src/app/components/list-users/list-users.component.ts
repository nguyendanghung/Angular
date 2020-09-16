import { HeroService } from './../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private apiService: HeroService) { }

  users: User[];
  pageNumber: number = 1;

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(): void {
    this.apiService.getUsers(this.pageNumber).subscribe((res: any) => {
      this.users = res['data'];
      console.log(res);

    })
  }

}
