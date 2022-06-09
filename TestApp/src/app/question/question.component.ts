import { Component, Input, OnInit } from '@angular/core';
import Answer from 'src/models/answerModel';
import Question from 'src/models/questionModel';

@Component({
  selector: '[app-question]',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question;
  answerList: Answer[] = [];
  route: string = "/404";

  constructor() {}

  ngOnInit(): void {
    //this.answerList = getAnswers(this.questionId);
    this.route = "../question/" + this.question.id;
  }

}
