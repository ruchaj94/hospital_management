import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DoctorRegisterService } from './doctor-register/doctor-register.service';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DocLoginComponent } from './doc-login/doc-login.component';
import { DocLoginService } from './doc-login/doc-login.service';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { DatePipe } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Route[] = [
//  { path: '', redirectTo: '/hospital/home', pathMatch: 'full' },
{path: '' , component: WelcomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'docregister' , component: DoctorRegisterComponent},
  {path: 'doclogin' , component: DocLoginComponent},
  {path: 'abtus', component:AboutusComponent},
  {path: 'contactus', component:ContactUsComponent},
  {path: 'bookanappointment', component: BookappointmentComponent} 
]
@NgModule({
  declarations: [
    AppComponent,
    DoctorRegisterComponent,
    DocLoginComponent,
    HomeComponent,
    AboutusComponent,
    WelcomeComponent,
    ContactUsComponent,
    BookappointmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    DropdownModule
  ],
  providers: [DoctorRegisterService,
               DocLoginService,
              DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
