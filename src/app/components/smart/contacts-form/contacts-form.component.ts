import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ContactsService } from 'src/app/services/contacts.service';
import { ContactInterface } from '../../../interfaces/contact.interface';
import { AppState } from 'src/app/interfaces/app.state';
import { AddContact } from 'src/app/redux/contacts.action';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.css']
})
export class ContactsFormComponent implements OnInit {

  private contactsForm: FormGroup;
  private pattern: RegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
  constructor(private fb: FormBuilder, private contactsService: ContactsService, private store: Store<AppState>) { }

  ngOnInit() {
    this.contactsForm = this.fb.group({
      "firstName": [''],
      "lastName": ['', [Validators.required]],
      "patronym": [''],
      "phone": ['', [Validators.required, Validators.pattern(this.pattern)]]
    })
  }
  
  addContact() {
    const contactId = this.contactsService.generateId()
    const contact:ContactInterface = {
      firstName: this.contactsForm.value.firstName,
      lastName: this.contactsForm.value.lastName,
      patronym: this.contactsForm.value.patronym,
      phone: this.contactsForm.value.phone,
      id: contactId,
      important: false
    }
    console.log(contact);

    this.contactsService.addContact(contact);
    this.contactsForm.reset();
  }

}
