import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "home"},
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "logout", component: HomeComponent},
    {path: "contact-create", component: ContactCreateComponent},
    {path: "contact-list", component: ContactListComponent},
    {path: 'contact/:id' , component: ContactDetailComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
