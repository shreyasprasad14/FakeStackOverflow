import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { QuestionComponent } from './question/question.component';
import { QuestionAnsPageComponent } from './question-ans-page/question-ans-page.component';
import { AddQuestionPageComponent } from './add-question-page/add-question-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { AddAnswerPageComponent } from './add-answer-page/add-answer-page.component';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { IconsModule } from '@progress/kendo-angular-icons';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionPageComponent,
    QuestionComponent,
    QuestionAnsPageComponent,
    AddQuestionPageComponent,
    AddAnswerPageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropDownsModule,
    BrowserAnimationsModule,
    GridModule,
    InputsModule,
    LabelModule,
    ButtonModule,
    IndicatorsModule,
    NavigationModule,
    NotificationModule,
    IconsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
