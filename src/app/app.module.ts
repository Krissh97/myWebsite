import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { MypicturesComponent } from './mypictures/mypictures.component';
import { ProjectsComponent } from './projects/projects.component';
const routes : Routes = [
  {
    path : 'home', component : HomeComponent
  },
  {
    path : 'experience', component : ExperienceComponent
  },
  {
    path : 'myself', component : MypicturesComponent
  },
  {
    path : '', redirectTo : '/home', pathMatch : 'full'
  }

];
@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    HomeComponent,
    MypicturesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
