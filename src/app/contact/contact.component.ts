import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  senderNameControl = new FormControl('');
  senderEmailControl = new FormControl('');
  senderMessageControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.senderNameControl.dirty) {
      alert('you changed the name field');
      console.log(this.senderNameControl)
      console.log(this.senderEmailControl)
      console.log(this.senderMessageControl)
    }
  }

}