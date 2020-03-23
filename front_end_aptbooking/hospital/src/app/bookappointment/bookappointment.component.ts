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

  flag = false;

  fname:string = "";
  lname:string="";
  phoneno : string="";
  email:string="";

  date:Date;
  selectedSpec: any;
  selectedDoc: any;
  selectedSlot: any;
  selectedTimeSlot: any;
  selectedOption: any;
  selectedVisitType: any;
  spec_name: string = ""
  id: number = 1

  specialization: SelectItem[] = [];
  doctors: SelectItem[] = [];
  slots: SelectItem[] = [];
  options: SelectItem[] = [];
  visitType: SelectItem[] = [];
  timeslots: SelectItem[] = [];

  constructor(private router: Router,
    private service: BookappointmentService) {

  }

  getDoctors(spec) {
    this.service.getDoctors(spec.id).subscribe((response) => {
      if (response['status'] == 'success') {
        console.log('response : ', response['data'])
        response['data'].forEach((item) => {
          this.doctors.push({
            label: 'Dr.' + item.fname + ' ' + item.lname,
            value: item
          })
        })
      }
      else {
        alert('error')
        console.log(response['error'])
      }
    })
  }

  getTimeSlots(selectedSlot) {
    console.log(selectedSlot.name)
    this.service.getTimeSlots(selectedSlot.name).subscribe((response) => {
      if (response['status'] == 'success') {
        console.log('response : ', response['data'])
        response['data'].forEach((item) => {
          this.timeslots.push({
            label: item.next_available_time,
            value: item
          })
        })
      }
      else {
        alert('error')
        console.log(response['error'])
      }
    })
  }


  book() {

    const body =
    {
      specialization: this.selectedSpec.name,
      doc_name: this.selectedDoc.fname,
      slot: this.selectedSlot.name,
      time_slot: this.selectedTimeSlot.next_available_time,
      options: this.selectedOption.name,
      visitType: this.selectedVisitType.name,
      date:this.date,
      fname:this.fname,
      lname:this.lname,
      phoneno:this.phoneno,
      email:this.email
    }

    console.log('date in ts : ',this.date)
    this.service.book(body).subscribe((response) => {
      if (response['status'] == 'success') {
        this.flag = true;

        //console.log('response : ', response['data'])
        //  alert('booking sucessfull')
        //  this.router.navigate(['/doclogin'])

      }
      else {
        alert('error')
        console.log(response['error'])
      }
    })
  }

  ngOnInit(): void {

    this.slots = [
      { label: 'Morning', value: { name: 'Morning' } },
      { label: 'Afternoon', value: { name: 'Afternoon' } },
      { label: 'Evening', value: { name: 'Evening' } }
    ];


    this.options = [
      { label: 'Selected slot or before', value: { name: 'Selected slot or before' } },
      { label: 'Selected slot or after', value: { name: 'Selected slot or after' } },
      { label: 'Selected slot', value: { name: 'Selected slot' } }
    ];

    this.visitType = [
      { label: 'First time', value: { name: 'First time' } },
      { label: 'Report checking', value: { name: 'Report checking' } },
      { label: 'Take suggestion', value: { name: 'Take suggestion' } },
      { label: 'Routine checkup', value: { name: 'Routine checkup' } }
    ];

    this.service.getSpecialization().subscribe((response) => {
      if (response['status'] == 'success') {
        console.log('response : ', response['data'])
        response['data'].forEach((item) => {
          this.specialization.push({
            label: item.name,
            value: item
          })
        })

       // console.log('specialization : ', this.specialization)
      }
      else {
        alert('error')
        console.log(response['error'])
      }
    }, (error) => {
      console.log("error", error);
    })
  }

}
