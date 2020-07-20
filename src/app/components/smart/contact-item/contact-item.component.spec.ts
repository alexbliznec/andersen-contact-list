import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactItemComponent } from './contact-item.component';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import {ContactsService} from '../../../services/contacts.service';
import {ContactInterface} from '../../../interfaces/contact.interface';

const mockContactData: ContactInterface = {
  firstName: 'string',
  lastName: 'string',
  patronym: 'string',
  phone: 'string',
  id: 1,
  important: true,
};

 describe('ContactItemComponent', () => {
  let component: ContactItemComponent;
  let fixture: ComponentFixture<ContactItemComponent>;
  let service: ContactsService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ContactItemComponent ],
      providers: [
        provideMockStore(),
        ContactsService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactItemComponent);
    component = fixture.componentInstance;
    component.contact = {...mockContactData};
    service = fixture.debugElement.injector.get(ContactsService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe( 'deleteContact', () => {
     it('should call service method with specific value', () => {
       spyOn(service, 'deleteContact');
       component.deleteContact();

       expect(service.deleteContact).toHaveBeenCalledWith(component.contact);
     });
  });

   describe( 'makeImportant', () => {
     it('should change value of contact.important property', () => {
       component.makeImportant();

       expect(component.contact.important).toBe(!mockContactData.important);
     });

     it('should call service method with specific value', () => {
       spyOn(service, 'makeImportant');
       component.makeImportant();

       expect(service.makeImportant).toHaveBeenCalledWith(component.contact);
     });
   });
});
