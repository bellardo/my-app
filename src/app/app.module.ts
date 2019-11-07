import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactCreateComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent,
    ContactDetailComponent
  ],
  imports: [
    AppRoutingModule,    
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
