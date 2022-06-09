import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Answer from 'src/models/answerModel';
import Question from 'src/models/questionModel';

@Component({
  selector: 'app-question-ans-page',
  templateUrl: './question-ans-page.component.html',
  styleUrls: ['./question-ans-page.component.sass']
})
export class QuestionAnsPageComponent implements OnInit {
  id: number = -1;
  question?: Question | null;
  answerList: Answer[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    let temp = this.route.snapshot.paramMap.get('id');
    if(temp === null || isNaN(Number(temp))) return;

    this.id = Number(temp);

    let res = this.getQuestion();
    res.subscribe(q => this.question = q);
    // this.answerList = getAnswers(this.id);
  }

  getQuestion(): Observable<Question> {
    return this.http.get<Question>(environment.apiURL + "/question/" + this.id)
  }
}
