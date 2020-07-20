import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsFormComponent } from './contacts-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidationErrorComponent} from '../../dumb/validation-error/validation-error.component';
import {HttpClientModule} from '@angular/common/http';
import {provideMockStore} from '@ngrx/store/testing';
import {ContactsService} from '../../../services/contacts.service';


describe('ContactsFormComponent', () => {
  let component: ContactsFormComponent;
  let fixture: ComponentFixture<ContactsFormComponent>;
  let service: ContactsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactsFormComponent,
        ValidationErrorComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [provideMockStore(), ContactsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsFormComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(ContactsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addContact', () =>{
    it('should call service methods if form data valid', () => {
      spyOn(service, 'generateId');
      spyOn(service, 'addContact');
      component.isContactsFormValid = 'VALID';

      component.addContact();
      expect(service.generateId).toHaveBeenCalled();
      expect(service.addContact).toHaveBeenCalled();
    });
  });
});
