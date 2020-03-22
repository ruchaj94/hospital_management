import { Component, OnInit } from '@angular/core';
import { BookappointmentService } from './bookappointment.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  specialization: SelectItem[]= [];
  selectedSpec: any;
  selectedDoc: any;
  // specialization : any[]
  spec_name:string =""
  id:number=1
  doctors: SelectItem[]= [];
  constructor(private router: Router,
    private service:BookappointmentService)
     { 
     
    }

      getDoctors(spec)
      {
        this.service.getDoctors(spec.id).subscribe((response)=>
        {
          if(response['status']=='success')
          {
              console.log('response : ',response['data'])
              response['data'].forEach((item)=>{
                this.doctors.push({
                  label: 'Dr.' + item.fname + ' ' + item.lname,
                  value: item
                })
              })
           }
          else{
              alert('error')
              console.log(response['error'])        
          }
        })
      }
   
  ngOnInit(): void {
    this.service.getSpecialization().subscribe((response)=>{
      if(response['status']=='success')
      {
          console.log('response : ',response['data'])
          response['data'].forEach((item)=>{
            this.specialization.push({
              label: item.name,
              value: item
            })
          })
         
          console.log('specialization : ',this.specialization)       
      }
      else{
          alert('error')
          console.log(response['error'])        
      }
     }, (error)=>{
       console.log("error",  error );
     })
  }

}
