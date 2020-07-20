import {fakeAsync, flush, getTestBed, TestBed} from '@angular/core/testing';
import { ContactsService } from './contacts.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {ContactInterface} from '../interfaces/contact.interface';

const mockContactData: ContactInterface = {
  firstName: 'string',
  lastName: 'string',
  patronym: 'string',
  phone: 'string',
  id: 1,
  important: true,
};

 describe('ContactsService', () => {
  let injector: TestBed;
  let service: ContactsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactsService, provideMockStore()]
    });
    injector = getTestBed();
    service = injector.get(ContactsService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe( 'sum', () => {
    it('should return sum of numbers', () => {
      expect(service.sum(3, 4)).toBe(7);
    });
  });

  describe( 'generateId', () => {

    it('should return any number', () => {
      expect(typeof service.generateId() === 'number').toBeTruthy();
    });
  });

  describe( 'showContacts', () => {

    it('should make request on specific URL and use GET method', fakeAsync(() => {
      service.showContacts();

      const req = httpMock.expectOne(`http://localhost:3000/contacts`);

      expect(req.request.method).toBe('GET');

      flush();
    }));
  });

  describe( 'addContact', () => {

    it('should make request on specific URL and use POST method', fakeAsync(() => {
      service.addContact(mockContactData);

      const req = httpMock.expectOne(`http://localhost:3000/contacts`);

      expect(req.request.method).toBe('POST');

      flush();
    }));
  });

  describe( 'deleteContact', () => {

    it('should call window confirm with specific string', () => {
      spyOn(window, 'confirm');
      service.deleteContact(mockContactData);

      expect(window.confirm).toHaveBeenCalledWith(
        `Вы действительно желаете удалить ${mockContactData.firstName} ${mockContactData.lastName} из свой телефонной книги?`
      );
    });

    it('should make request on specific URL and use DELETE method', fakeAsync(() => {

      spyOn(window, 'confirm').and.returnValue(true);
      service.deleteContact(mockContactData);

      const req = httpMock.expectOne(`http://localhost:3000/contacts/1`);

      expect(req.request.method).toBe('DELETE');

      flush();
    }));
  });

  describe( 'makeImportant', () => {

    it('should make request on specific URL and use PUT method', fakeAsync(() => {
      service.makeImportant(mockContactData);

      const req = httpMock.expectOne(`http://localhost:3000/contacts/1`);

      expect(req.request.method).toBe('PUT');

      flush();
    }));
  });
});
