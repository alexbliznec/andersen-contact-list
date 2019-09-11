import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

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
   this.http.get(`${this.baseUrl}/contacts`)
      .pipe(map((val: ContactInterface[]) => val))
      .subscribe((result) => {
        this.store.dispatch(new ShowContacts(result))
      })
  }
  addContact(contactData: ContactInterface) {
    this.http.post(`${this.baseUrl}/contacts`, contactData)
      .pipe(map((val: ContactInterface) => val))
      .subscribe((result) => {
        this.store.dispatch(new AddContact(result));
    });
  }
  deleteContact(contactData: ContactInterface) {
    const deleteDecision = confirm(`Вы действительно желаете удалить ${contactData.firstName} ${contactData.lastName} из свой телефонной книги?`);
    if (deleteDecision) {
      this.http.delete(`${this.baseUrl}/contacts/${contactData.id}`)
        .pipe(map((val: ContactInterface) => val))
        .subscribe((result) => {
          this.store.dispatch(new DeleteContact(result));
          this.showContacts();
        });
    } else { return }
  }
  makeImportant(contactData: ContactInterface) {
    this.http.put(`${this.baseUrl}/contacts/${contactData.id}`, contactData)
      .pipe( map((val: ContactInterface) => val))
      .subscribe((result) => {
        this.store.dispatch(new ImportantContact(result));
        this.showContacts();
      });
  }
  generateId() {
    return Math.floor(Math.random() * 99999); // конечно это учебное решение ибо не гарантирует уникальности числа
  }

}

// старый вариант на промисах:
      // .toPromise()
      // .then((data: ContactInterface[]) => this.store.dispatch(new ShowContacts(data)));