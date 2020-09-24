import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  users: User[];  
  formAddUser = this.fb.group({
    name: ['', [Validators.required]],
    detail: ['', [Validators.required, Validators.maxLength(50)]]
  })
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
    const newUser = this.formAddUser.value
    if(newUser) {
      this.apiService.addUser(newUser).subscribe();
      this.getListUsers();
    }
  }

  deleteUser(id: number): void {
    console.log(id);
  
    // $event.stopPropagation();
    this.apiService.deleteUser(id).subscribe((res: any) => {
      console.log(res);
      
      if(res) {
        this.getListUsers();
      }
    });
  }

  showInterval(interval: number) {
    console.log(interval);
    
  }

}
