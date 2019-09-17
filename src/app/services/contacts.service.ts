import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { AppState } from '../interfaces/app.state';
import { ShowContacts, AddContact, DeleteContact, ImportantContact, UpdateContact } from '../redux/contacts.action';
import { ContactInterface } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contactData: ContactInterface;
  constructor(private store: Store<AppState>) { }

  showContacts() {
     this.store.dispatch(new ShowContacts());
  }
  addContact(contactData) {
    this.contactData = contactData;
    this.store.dispatch(new AddContact());
  }
  deleteContact(contactData: ContactInterface) {
    const deleteDecision = confirm(`Вы действительно желаете удалить ${contactData.firstName} ${contactData.lastName} из свой телефонной книги?`);
    if (deleteDecision) {
      this.contactData = contactData;
      this.store.dispatch(new DeleteContact());
    } else { return }
  }
  makeImportant(contactData: ContactInterface) {
    this.contactData = contactData;
    this.store.dispatch(new UpdateContact());
  }
  generateId(): number {
    return Math.floor(Math.random() * 99999);
  }
  sum(a: number, b: number): number {
    return a + b;
  }
}
