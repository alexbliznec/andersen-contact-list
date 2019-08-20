import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { AppState } from '../interfaces/app.state';
import { ShowContacts, AddContact, DeleteContact, ImportantContact } from '../redux/contacts.action';
import { ContactInterface } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseUrl: string = 'http://localhost:3000'
  
  constructor(private http: HttpClient, private store: Store<AppState>) { }

  showContacts() {
   return this.http.get(`${this.baseUrl}/contacts`)
      .toPromise()
      .then((data: ContactInterface[]) => this.store.dispatch(new ShowContacts(data)));
  }
  addContact(contactData: ContactInterface) {
    this.http.post(`${this.baseUrl}/contacts`, contactData)
      .toPromise()
      .then((contact: ContactInterface) => this.store.dispatch(new AddContact(contact)))
  }
  deleteContact(contactData: ContactInterface) {
    const deleteDecision = confirm(`Вы действительно желаете удалить ${contactData.firstName} ${contactData.lastName} из свой телефонной книги?`);
    if (deleteDecision) {
      this.http.delete(`${this.baseUrl}/contacts/${contactData.id}`)
        .toPromise()
        .then((data: ContactInterface) => this.store.dispatch(new DeleteContact(data)))
        .then(() => this.showContacts());
    } else {
      return;
    }

  }
  makeImportant(contactData: ContactInterface) {
    console.log(contactData);
    this.http.put(`${this.baseUrl}/contacts/${contactData.id}`, contactData)
      .toPromise()
      .then((data: ContactInterface) => this.store.dispatch(new ImportantContact(data)))
      .then(() => this.showContacts());
  }
  generateId() {
    return Math.floor(Math.random() * 99999); // конечно это учебное решение ибо не гарантирует уникальности числа
  }

}
