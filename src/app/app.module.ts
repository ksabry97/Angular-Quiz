import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UsersServiceService } from './services/users-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
@NgModule({
  declarations: [AppComponent, HomeComponent, UserPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SkeletonModule,
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
