import { Action } from '@ngrx/store';
import { ContactInterface } from '../interfaces/contact.interface';

export namespace CONTACT_ACTION {
    export const ADD_CONTACT = '[Contacts] ADD_CONTACT';
    export const ADD_CONTACT_SUCCESS = '[Contacts] ADD_CONTACT_SUCCESS';
    export const DELETE_CONTACT = '[Contacts] DELETE_CONTACT';
    export const DELETE_CONTACT_SUCCESS = '[Contact] DELETE_CONTACT_SUCCESS';
    export const IMPORTANT_CONTACT = '[Contacts] IMPORTANT_CONTACT';
    export const SHOW_CONTACTS = '[Contacts] SHOW_CONTACTS';
    export const LOAD_CONTACTS = '[Contacts] LOAD_CONTACTS';
    export const UPDATE_CONTACT = '[Contacts] UPDATE_CONTACT';
    
}

export class AddContactSuccess implements Action {
    readonly type = CONTACT_ACTION.ADD_CONTACT_SUCCESS;

    constructor(public payload: ContactInterface) {} 
}
export class DeleteContact implements Action {
    readonly type = CONTACT_ACTION.DELETE_CONTACT;
}
export class DeleteContactSuccess implements Action {
    readonly type = CONTACT_ACTION.DELETE_CONTACT_SUCCESS;

    constructor(public payload: ContactInterface) {}
}
export class UpdateContact implements Action {
    readonly type = CONTACT_ACTION.UPDATE_CONTACT;
}
export class ImportantContact implements Action {
    readonly type = CONTACT_ACTION.IMPORTANT_CONTACT;

    constructor(public payload: ContactInterface) {}
}
export class ShowContacts implements Action {
    readonly type = CONTACT_ACTION.SHOW_CONTACTS;
}
export class LoadContacts implements Action {
    readonly type = CONTACT_ACTION.LOAD_CONTACTS;

    constructor(public payload: ContactInterface[]) {}
}
export class AddContact implements Action {
    readonly type = CONTACT_ACTION.ADD_CONTACT;
}


export type ContactsAction = AddContact | AddContactSuccess | DeleteContact | DeleteContactSuccess | ImportantContact | ShowContacts | LoadContacts | UpdateContact;