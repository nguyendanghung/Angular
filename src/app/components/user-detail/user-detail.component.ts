import { HeroService } from './../../services/api.service';
import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private apiService: HeroService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    this.apiService.getUser(2).subscribe((res: any) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    })
  }

}
