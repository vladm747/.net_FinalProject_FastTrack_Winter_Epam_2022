import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowMessagesComponent } from './home/forum/show-topics/show-messages/show-messages.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'view/:topicId',  component: ShowMessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
