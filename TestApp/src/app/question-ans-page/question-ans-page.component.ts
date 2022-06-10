import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Answer from 'src/models/answerModel';
import Question from 'src/models/questionModel';
import { AnswerService } from '../services/answer/answer.service';
import { QuestionService } from '../services/question/question.service';

@Component({
  selector: 'app-question-ans-page',
  templateUrl: './question-ans-page.component.html',
  styleUrls: ['./question-ans-page.component.sass']
})
export class QuestionAnsPageComponent implements OnInit {
  private id?: number;

  question?: Question | null;
  answerList: Answer[] = [];
  answerRoute?: string;

  isLoading = true;

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private answerService: AnswerService) { }

  ngOnInit(): void {
    let temp = this.route.snapshot.paramMap.get('id');
    if(temp === null || isNaN(Number(temp))) return;

    this.id = Number(temp);

    this.questionService.getQuestion(this.id).subscribe(q => {
        if(q === undefined) {
          this.isLoading = false;
          return;
        }
        
        this.question = q;
        this.answerRoute = "../../addAnswer/" + this.question.id;
        this.answerService.getAnswers(this.question.id).subscribe(ansList => {
          this.answerList = ansList;
          this.isLoading = false;
          }
        );
      }
    );
  }
}
