
import { CONTACT_ACTION, ContactsAction } from './contacts.action';

const initialState = {
    contacts: []
}

export function contactsReducer(state = initialState, action: ContactsAction) {
    switch (action.type) {
        case CONTACT_ACTION.ADD_CONTACT:
            alert(`contact ${action.payload.firstName} ${action.payload.lastName} added`);
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case CONTACT_ACTION.DELETE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts.filter((contact) => contact.id !== action.payload.id)]
            }
        case CONTACT_ACTION.IMPORTANT_CONTACT:
            const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
            state.contacts[index].important = !state.contacts[index].important;
            return {
                ...state,
                contacts: [...state.contacts]
            }
        case CONTACT_ACTION.SHOW_CONTACTS:
            return {
                ...state,
                contacts: [...action.payload]
            }
            default:
            return state;
    }
}