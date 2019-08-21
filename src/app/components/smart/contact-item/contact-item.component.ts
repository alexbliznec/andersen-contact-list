import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/app.state';
import { DeleteContact, ImportantContact } from 'src/app/redux/contacts.action';
import { ContactInterface } from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent {
  @Input()contact: ContactInterface;

  constructor(private contactsService: ContactsService, private store: Store<AppState>, private element: ElementRef, private renderer: Renderer2) { }

  deleteContact() {
    this.contactsService.deleteContact(this.contact);

  }
  makeImportant() {
    this.contact.important = !this.contact.important;
    this.contactsService.makeImportant(this.contact);
    // console.log(this.element.nativeElement);
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'green');
  }

}
