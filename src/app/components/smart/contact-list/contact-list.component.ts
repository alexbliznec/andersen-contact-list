import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ContactsService } from 'src/app/services/contacts.service';
import { AppState } from 'src/app/interfaces/app.state';
import { ContactInterface, Contacts } from 'src/app/interfaces/contact.interface';
import { ShowContacts } from 'src/app/redux/contacts.action';



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts: ContactInterface[];
  constructor(private contactsService: ContactsService, private store: Store<AppState>) { }

  ngOnInit() {
    // this.store.select('contactsPage').subscribe(({contacts}) => {
    //   this.contacts = contacts;
    // })
    this.contactsService.showContacts()
    this.store.select('contactsPage').subscribe(({contacts}) => {
      this.contacts = contacts;
    })
  }

}
