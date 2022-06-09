import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Question from 'src/models/questionModel';

@Component({
  selector: 'app-add-question-page',
  templateUrl: './add-question-page.component.html',
  styleUrls: ['./add-question-page.component.sass']
})
export class AddQuestionPageComponent implements OnInit {
  readonly TITLE_MAX_LEN = 25;
  readonly TITLE_MIN_LEN = 5;

  readonly TEXT_MAX_LEN = 120;
  readonly TEXT_MIN_LEN = 5

  questionForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(this.TITLE_MAX_LEN), Validators.minLength(this.TITLE_MIN_LEN)]],
    text: ['', [Validators.required, Validators.maxLength(this.TEXT_MAX_LEN), Validators.minLength(this.TEXT_MIN_LEN)]],
    username: ['Anonymous']
  });

  titleValid = false;
  textValid = false;



  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onChange(): void {
    if(this.questionForm.invalid) {
      let response = this.questionForm.value;

      if(response.title && response.title.length < this.TITLE_MAX_LEN && response.title.length > this.TITLE_MIN_LEN) {
        this.titleValid = true;
      } else {
        this.titleValid = false;
      }

      if(response.text && response.text.length < this.TEXT_MAX_LEN && response.text.length > this.TEXT_MIN_LEN) {
        this.textValid = true;
      } else {
        this.textValid = false;
      }
    } else {
      this.titleValid = true;
      this.textValid = true;
    }
  }

  onSubmit(): void {
    if(this.questionForm.invalid) return;
    let response = this.questionForm.value;
    let timestamp = Date.now();

    let question: Question = {
      id: -1, //Throwaway, is redefined on server
      title: response.title!,
      text!: response.text!,
      askedBy!: response.username!,
      askedAt: timestamp
    };

    
    this.addQuestion(question);
    this.router.navigate(['../questions']);
  }

  addQuestion(question: Question): void {
    console.log(question)
    let res = this.http.post(environment.apiURL + "/question", question);

    res.subscribe(q => console.log(q))
  }

}
