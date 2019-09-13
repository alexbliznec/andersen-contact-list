import { Component, Input } from '@angular/core';

import { ContactInterface } from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent {
  @Input()contact: ContactInterface;

  constructor(private contactsService: ContactsService) { }

  deleteContact() {
    this.contactsService.deleteContact(this.contact);
  }

  makeImportant() {
    this.contact.important = !this.contact.important;
    this.contactsService.makeImportant(this.contact);
  }

}
