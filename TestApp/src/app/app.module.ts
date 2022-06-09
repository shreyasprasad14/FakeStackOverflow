import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { QuestionComponent } from './question/question.component';
import { QuestionAnsPageComponent } from './question-ans-page/question-ans-page.component';
import { AddQuestionPageComponent } from './add-question-page/add-question-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionPageComponent,
    QuestionComponent,
    QuestionAnsPageComponent,
    AddQuestionPageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
