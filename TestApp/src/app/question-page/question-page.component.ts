import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  isLoading = true;

  questionList: Question[] = [];

  constructor(private questionService: QuestionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let res: Observable<Question[]>
    
    this.route.queryParams.subscribe(params => {
      if(params['query']) res = this.questionService.getSearchedQuestions(params['query']);
      else res = this.questionService.getQuestions();

      res.subscribe(qList => {
        this.questionList = qList
  
        this.questionList.forEach(question => {
          question.link = "../question/" + question.id;
        });
  
        this.isLoading = false;
      });
      
    }); 
  }
}
