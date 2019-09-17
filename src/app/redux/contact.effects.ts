import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { ContactsService } from '../services/contacts.service';
import * as ContactAction from '../redux/contacts.action';
import { ContactInterface } from '../interfaces/contact.interface';
import { HttpClient } from '@angular/common/http';


@Injectable() export class ContactEffects {
    private BASE_URL: string = 'http://localhost:3000';

    constructor(
        private actions$: Actions,
        private contactsService: ContactsService,
        private http: HttpClient) {}

    @Effect() loadContacts$ = this.actions$
        .pipe(
            ofType(ContactAction.CONTACT_ACTION.SHOW_CONTACTS),
            switchMap(() => this.http.get(`${this.BASE_URL}/contacts`)
                .pipe(map((result: ContactInterface[]) => new ContactAction.LoadContacts(result)))
                )
            );

    @Effect() addContact$ = this.actions$.pipe(
        ofType(ContactAction.CONTACT_ACTION.ADD_CONTACT),
        switchMap(() => this.http.post(`${this.BASE_URL}/contacts`, this.contactsService.contactData)
                .pipe(map((result: ContactInterface) => new ContactAction.AddContactSuccess(result)))
                )
            );

    @Effect() deleteContact$ = this.actions$.pipe(
        ofType(ContactAction.CONTACT_ACTION.DELETE_CONTACT),
        switchMap(() => this.http.delete(`${this.BASE_URL}/contacts/${this.contactsService.contactData.id}`)
                .pipe(
                    map(() => new ContactAction.DeleteContactSuccess(this.contactsService.contactData)))
                )
            );

    @Effect() makeImportantContact$ = this.actions$.pipe(
        ofType(ContactAction.CONTACT_ACTION.UPDATE_CONTACT),
        switchMap(() => this.http.put(`${this.BASE_URL}/contacts/${this.contactsService.contactData.id}`, this.contactsService.contactData)
                .pipe(
                    map(() => new ContactAction.ImportantContact(this.contactsService.contactData)),
                    map(() => new ContactAction.ShowContacts())
                ))
            );
}