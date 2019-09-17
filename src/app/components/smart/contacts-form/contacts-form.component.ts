import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactsService } from 'src/app/services/contacts.service';
import { ContactInterface } from '../../../interfaces/contact.interface';


@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.css']
})
export class ContactsFormComponent implements OnInit {
  public isContactsFormValid: string;
  private contactsForm: FormGroup;
  private pattern: RegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
  constructor(private fb: FormBuilder, 
              private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsForm = this.fb.group({
      "firstName": [''],
      "lastName": ['', [Validators.required]],
      "patronym": [''],
      "phone": ['', [Validators.required, Validators.pattern(this.pattern)]]
    })

    this.contactsForm.statusChanges.subscribe((res) => {
      this.isContactsFormValid = res;
    });
  }
  
  addContact() {
    if (this.isContactsFormValid !== 'INVALID' && this.isContactsFormValid !== undefined) {
      const contactId = this.contactsService.generateId()
      const contact:ContactInterface = {
        firstName: this.contactsForm.value.firstName,
        lastName: this.contactsForm.value.lastName,
        patronym: this.contactsForm.value.patronym,
        phone: this.contactsForm.value.phone,
        id: contactId,
        important: false
      }
  
      this.contactsService.addContact(contact);
      this.contactsForm.reset();
    }
    this.contactsForm.markAllAsTouched();
    return;
  }
}
