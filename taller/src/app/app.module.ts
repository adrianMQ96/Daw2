import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CitesListComponent } from './cites/cites-list/cites-list.component';
import { CitesItemComponent } from './cites/cites-item/cites-item.component';
import { HomeComponent } from './components/home/home.component';
import { CitesService } from './cites/cites.service';
import { HttpClientModule } from '@angular/common/http';
import { CitesDetailComponent } from './cites/cites-detail/cites-detail.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitesListComponent,
    CitesItemComponent,
    HomeComponent,
    CitesDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
