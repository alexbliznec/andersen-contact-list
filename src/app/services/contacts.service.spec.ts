import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContactsService } from './contacts.service';

fdescribe('ContactsService', () => {
  let service: ContactsService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClient, HttpClientModule, HttpClientTestingModule],
      providers: [ContactsService, provideMockStore()]});

      service = TestBed.get(ContactsService);
      httpMock = TestBed.get(HttpTestingController);
    
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return sum of numbers', () => {
    expect(service.sum(3, 4)).toBe(7);
  });

  it('should return random number', () => {
    expect(typeof service.generateId()).toBe('number');
  });

  // it('should return all contacts', () => {
  //   let backend: HttpTestingController;
  //   const mockUsers = [{firstName: 'testName', lastName: 'testLastName', patronym: 'TestPatronym', phone: 'testPhone', id: 1, important: false}];
  //   const serviceSpy = spyOn(service, 'showContacts');
    
  //   backend.expectOne({
  //     method: 'GET',
  //     url: 'http://localhost:3000/contacts'
  //   }).flush(mockUsers);

  //   expect(service.showContacts().subscribe())
    
  // })

  // it('should add new contact', () => {
  //   expect(service.addContact())
  // })
});
