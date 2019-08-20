import { ContactInterface } from './contact.interface';

export interface AppState {
    contactsPage: {
        contacts: ContactInterface[]
    }
}