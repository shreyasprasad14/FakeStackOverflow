import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Question from 'src/models/questionModel';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.sass']
})
export class QuestionPageComponent implements OnInit {
  questionList: Question[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var res = this.getQuestions();

    res.subscribe(qList => {
      this.questionList = qList

      this.questionList.forEach(question => {
        
      })
    });
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(environment.apiURL + "/question");
  }
}
