import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnswerPageComponent } from './add-answer-page/add-answer-page.component';
import { AddQuestionPageComponent } from './add-question-page/add-question-page.component';
import { QuestionAnsPageComponent } from './question-ans-page/question-ans-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';

const routes: Routes = [
  { path: 'questions', component: QuestionPageComponent },
  { path: 'question/:id', component: QuestionAnsPageComponent },
  { path: 'askQuestion', component: AddQuestionPageComponent },
  { path: 'addAnswer/:questionId', component: AddAnswerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
