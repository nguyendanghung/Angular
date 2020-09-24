import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserItemComponent } from './user-item/user-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    UserItemComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class ComponentsModule { }
