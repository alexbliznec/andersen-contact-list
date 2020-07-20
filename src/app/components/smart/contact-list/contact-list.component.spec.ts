import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactItemComponent} from '../contact-item/contact-item.component';
import {ContactsService} from '../../../services/contacts.service';
import {HttpClientModule} from '@angular/common/http';
import {provideMockStore} from '@ngrx/store/testing';

const initialState = {
  contacts: []
};

xdescribe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactListComponent,
        ContactItemComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [ContactsService, provideMockStore({initialState})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
