import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookappointmentService {

  http: HttpClient
  url = 'http://localhost:4000'   //express port 4000
  name:string = ""
  constructor(httpClient: HttpClient) {
    this.http = httpClient
   }

   getSpecialization()
   {
    return this.http.get(this.url+'/spec')
   }

   getTimeSlots(name:String)
   {
    const body =
    {
     name:name
    }
     return this.http.post(this.url+'/doc/slot',body)
   }

   getDoctors(id:number)
   {
     console.log('id : ',id)
     return this.http.get(this.url+'/doc/spec/'+id)
   }

   book(body:object)
   {
     console.log('body : ',body)
     return this.http.post(this.url + '/book',body)
   }
}
