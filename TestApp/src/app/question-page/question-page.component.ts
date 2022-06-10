import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Question from 'src/models/questionModel';
import { QuestionService } from '../services/question/question.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.sass']
})
export class QuestionPageComponent implements OnInit {
  loading = true;

  questionList: Question[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    var res = this.questionService.getQuestions();

    res.subscribe(qList => {
      this.questionList = qList

      this.questionList.forEach(question => {
        question.link = "../question/" + question.id;
      });

      this.loading = false;
    });
  }

}
