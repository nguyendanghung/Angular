import { ApiService } from './../../services/api.service';
import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  users: User[];  

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers(): void {
    this.apiService.getUsers().subscribe((res: any) => {
      this.users = res;
    }, (err) => {
      console.log(err);
    })
  }

  addNewUser(): void {
    
  }

  deleteUser($event, id: number): void {
    $event.stopPropagation();
    this.apiService.deleteUser(id).subscribe((res: any) => {
      if(res) {
        this.getListUsers();
      }
    });
  }

}
