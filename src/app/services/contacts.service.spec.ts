import { TestBed } from '@angular/core/testing';


import { ContactsService } from './contacts.service';
import { HttpClientModule } from '@angular/common/http';
describe('ContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [ContactsService]
  }));

  it('should be created', () => {
    const service: ContactsService = TestBed.get(ContactsService);
    expect(service).toBeTruthy();
  });

  it('should return sum of numbers', () => {
    const service: ContactsService = TestBed.get(ContactsService);
    expect(service.sum(3, 4)).toBe(7);
  })
});
