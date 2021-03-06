import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ForumComponent } from './home/forum/forum.component';
import { ShowTopicsComponent } from './home/forum/show-topics/show-topics.component';
import { AddEditTopicComponent } from './home/forum/add-edit-topic/add-edit-topic.component';
import { ForumApiService } from './forum-api.service';
import { ShowMessagesComponent } from './home/forum/show-topics/show-messages/show-messages.component';
import {MatCardModule} from '@angular/material/card';
import { AddEditMessageComponent } from './home/forum/show-topics/show-messages/add-edit-message/add-edit-message.component';
@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    ForumComponent,
    ShowTopicsComponent,
    AddEditTopicComponent,
    ShowMessagesComponent,
    AddEditMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ForumApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
