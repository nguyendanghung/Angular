import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MesComponent } from './components/mes/mes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MesComponent,
    DashboardComponent,
    ListUsersComponent,
    UserDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
