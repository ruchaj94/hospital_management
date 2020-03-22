import { Component, OnInit } from '@angular/core';
import { DoctorRegisterService } from './doctor-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  firstname:string=""
  lastname:string=""
  phoneno:string=""
  altphoneno:string=""
  email:string=""
  password:string=""
  gender:string=""
  rating:string=""
  exist:string=""
  dob:String="2012/02/12"
  address:string=""
  experience:string=""
  specialization:string=""
  availability:string=""

  service : DoctorRegisterService
  constructor(private router: Router,
    docService:DoctorRegisterService) {
      this.service = docService
     }


  onRegister()
  {
    alert('inside doc-reg onRegistration');    

    if(this.firstname.length == 0){
      alert('firstname is required')
  }
  else if(this.lastname.length == 0){
      alert('lastname is required')
  }
  else if(this.phoneno.length == 0){
      alert('phoneno is required')
  }
  else if(this.altphoneno.length == 0){
      alert('altphoneno number is required')
  }
  else if(this.email.length == 0){
      alert('email is required')
  }
  else if(this.password.length ==0){
      alert('password is required')
  }
  else if(this.gender.length ==0){
    alert('gender is required')
}
else if(this.address.length ==0){
  alert('address is required')
}
else if(this.experience.length ==0){
  alert('experience is required')
}
else if(this.availability.length ==0){
  alert('availability is required')
}
  else{

  this.service.onRegister(this.firstname,this.lastname,this.phoneno,this.altphoneno,this.email,this.password,this.gender,this.dob,this.address,
    this.experience,this.availability,this.rating,this.exist).subscribe((response)=>{

     // console.log(response);
          if(response['status']=='success')
          {
              alert('you have successfully register')
              this.router.navigate(['/doclogin'])
          }
          else
          {
              console.log(response['error'])
              alert('error')
          }
      })

  }
  }

  cancle()
  {
   alert('inside doc-reg back'); 
  }

  ngOnInit(): void {
  }

}
