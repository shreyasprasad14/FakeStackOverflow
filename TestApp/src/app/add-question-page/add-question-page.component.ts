import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import Question from 'src/models/questionModel';
import { QuestionService } from '../services/question/question.service';

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
    text: ['', [Validators.required, Validators.maxLength(this.TEXT_MAX_LEN), Validators.minLength(this.TEXT_MIN_LEN)]]  
  });

  isServerProcessing = false;

  constructor(
    private fb: FormBuilder,
     private router: Router,
      private questionService: QuestionService,
      private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.questionForm.invalid) return;
    this.isServerProcessing = true;
    let response = this.questionForm.value;
    let timestamp = new Date();

    let time = timestamp.toTimeString().split(' ')[0];
    let dateInfo = timestamp.toDateString().split(' ');
    let date = dateInfo[1] + " " + dateInfo[2] + ", " + dateInfo[3];

    let question: Question = {
      id: -1, //Throwaway, is redefined on server
      title: response.title!,
      text!: response.text!,
      askedBy!: "ANONYMOUS",
      askedAt: date + " @ " + time
    };

    
    this.questionService.addQuestion(question).subscribe((res) => {
      this.isServerProcessing = false;
      
      if(res.id == -1) {
        this.notificationService.show({
          content: "Error",
          animation: { type: "slide", duration: 400 },
          position: { horizontal: "center", vertical: "bottom" },
          type: {style: "error", icon: true}
        });
        return;
      };

      this.notificationService.show({
        content: "Question Added!",
        animation: { type: "slide", duration: 400 },
        position: { horizontal: "center", vertical: "bottom" },
        type: {style: "success", icon: true}
      });

      this.router.navigate(['../questions'])
    });
  }
}
