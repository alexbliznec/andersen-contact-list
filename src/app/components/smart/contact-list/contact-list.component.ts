import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';

import { ContactsService } from 'src/app/services/contacts.service';
import { AppState } from 'src/app/interfaces/app.state';
import { ContactInterface } from 'src/app/interfaces/contact.interface';
import { Observable } from 'rxjs';
import { ShowContacts } from 'src/app/redux/contacts.action';



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts: ContactInterface[];
  public contactList$: Observable<{contacts: ContactInterface[]}>;
  constructor(private contactsService: ContactsService, private store: Store<AppState>) { }

  ngOnInit() {
    this.contactsService.showContacts();
    this.contactList$ = this.store.select((state) => state.contactsPage);
  }

}
