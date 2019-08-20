import { Action } from '@ngrx/store';
import { ContactInterface } from '../interfaces/contact.interface';

export namespace CONTACT_ACTION {
    export const ADD_CONTACT = 'ADD_CONTACT';
    export const DELETE_CONTACT = 'DELETE_CONTACT';
    export const IMPORTANT_CONTACT = 'IMPORTANT_CONTACT';
    export const SHOW_CONTACTS = 'SHOW_CONTACTS';
}

export class AddContact implements Action {
    readonly type = CONTACT_ACTION.ADD_CONTACT;

    constructor(public payload: ContactInterface) {} 
} 
export class DeleteContact implements Action {
    readonly type = CONTACT_ACTION.DELETE_CONTACT;

    constructor(public payload: ContactInterface) {}
}
export class ImportantContact implements Action {
    readonly type = CONTACT_ACTION.IMPORTANT_CONTACT;

    constructor(public payload: ContactInterface) {}
}
export class ShowContacts implements Action {
    readonly type = CONTACT_ACTION.SHOW_CONTACTS;

    constructor(public payload: ContactInterface[]) {}
}


export type ContactsAction = AddContact | DeleteContact | ImportantContact | ShowContacts;