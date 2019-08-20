export interface ContactInterface {
    firstName: string;
    lastName: string;
    patronym: string;
    phone: string;
    id: number;
    important: boolean;
}

export interface Contacts {
    contacts: ContactInterface[]
}