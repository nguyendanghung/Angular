import { ApiService } from './../../services/api.service';
import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;
  isEdit: boolean = false;

  userDetailForm = this.fb.group({
    name: ['', 
    [Validators.required]
  ],
    detail: ['',
    [Validators.required, Validators.maxLength(50)]
  ],

  })

  constructor(private apiService: ApiService, private route:ActivatedRoute, private fb: FormBuilder) { 

  }

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

  updateUser(id: number): void {
    console.warn(this.userDetailForm.value);
    this.apiService.updateUser(this.userDetailForm.value, id).subscribe((res: any) => {
      if(res) {
        this.user = res;
        this.getUser()
      }
    })
  }

}
