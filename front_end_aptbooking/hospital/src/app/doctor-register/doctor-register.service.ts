import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class DoctorRegisterService {

  http:HttpClient
  url = 'http://localhost:4000/doc/reg'; 
  
  constructor(httpClient:HttpClient) {
    this.http = httpClient
   }

    onRegister(firstname:string, lastname:string, phoneno:string, altphoneno:string, email:string, password:string, gender:string,
    dob:String,address:string,experience:string,availability:string,rating:string,exist:string)
   {
     alert('inside service onReg()')

      // dob = new Date();
      // let latest_date =this.datepipe.transform(dob, 'yyyy/MM/dd');
 
      // console.log('latest date' +latest_date);
    
     const body =
     {
      firstname:firstname,
      lastname:lastname,
      phoneno:phoneno,
      altphoneno:altphoneno,
      email:email,
      password:password,
      gender:gender,
      dob:dob,
      address:address,
      experience:experience,
      availability:availability,
      rating:rating,
      exist:exist
     }

   //  console.log(body)

     return this.http.post(this.url,body);
      
   }
}
