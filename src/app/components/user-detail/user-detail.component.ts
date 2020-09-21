import { ApiService } from './../../services/api.service';
import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private apiService: ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    // get id from url and convert string to number.
    const idUser = +this.route.snapshot.paramMap.get('id')
    this.apiService.getUser(idUser).subscribe((res: any) => {
      if(res) {
        this.user = res
      }
    }, (error) => {
      console.log(error);
    })
  }

}
