import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

model = {
  name: '',
  date: '',
  time: '',
  location:{
    address:'',
    city: '',
    country: ''
  }
};

  constructor(private eventService: EventService, private router: Router) { } 

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  isValid(control: NgModel): boolean | null {
    return control.valid || !control.touched;  
  }

  onSubmit(): void{
    this.eventService.saveEvent(this.model);
    this.router.navigate(["/events"]);
  }
}
