import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ListUsersComponent} from "src/app/pages/list-users/list-users.component";
import {UserDetailComponent} from "src/app/pages/user-detail/user-detail.component";
import { LayoutComponent } from 'src/app/layout/layout.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser'

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent, 
  },
  {path: 'users', component: ListUsersComponent},
  {path: 'user-detail/:id', component: UserDetailComponent}
]

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserModule,
    RouterModule.forChild([{
      path: '',
      component: LayoutComponent,
      children: routes
    }])
  ],
})
export class LayoutModule { }
