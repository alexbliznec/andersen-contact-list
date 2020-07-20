import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ValidationErrorComponent } from './components/dumb/validation-error/validation-error.component';
import { ContactsFormComponent } from './components/smart/contacts-form/contacts-form.component';
import { ContactItemComponent } from './components/smart/contact-item/contact-item.component';
import { ContactListComponent } from './components/smart/contact-list/contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ValidationErrorComponent,
        ContactsFormComponent,
        ContactItemComponent,
        ContactListComponent,
      ],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [provideMockStore()]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
