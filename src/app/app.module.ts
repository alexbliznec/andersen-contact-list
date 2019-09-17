import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { ValidationErrorComponent } from './components/dumb/validation-error/validation-error.component';
import { ContactsFormComponent } from './components/smart/contacts-form/contacts-form.component';
import { ContactItemComponent } from './components/smart/contact-item/contact-item.component';
import { ContactListComponent } from './components/smart/contact-list/contact-list.component';
import { contactsReducer } from './redux/contacts.reducer';
import { ContactEffects } from './redux/contact.effects';


@NgModule({
  declarations: [
    AppComponent,
    ValidationErrorComponent,
    ContactsFormComponent,
    ContactItemComponent,
    ContactListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({contactsPage: contactsReducer}),
    EffectsModule.forRoot([ContactEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
