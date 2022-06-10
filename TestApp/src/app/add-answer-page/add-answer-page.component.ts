import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import Answer from 'src/models/answerModel';
import Question from 'src/models/questionModel';
import { AnswerService } from '../services/answer/answer.service';
import { QuestionService } from '../services/question/question.service';

@Component({
  selector: 'app-add-answer-page',
  templateUrl: './add-answer-page.component.html',
  styleUrls: ['./add-answer-page.component.sass']
})
export class AddAnswerPageComponent implements OnInit {
  readonly TEXT_MIN_LEN = 5;
  readonly TEXT_MAX_LEN = 200;

  answerForm = this.fb.group({
    text:['', [Validators.required, Validators.minLength(this.TEXT_MIN_LEN), Validators.maxLength(this.TEXT_MAX_LEN)]],
  });

  isLoading = true;
  questionId?: number;
  question?: Question;
  isServerProcessing = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private answerService: AnswerService,
    private questionService: QuestionService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    let temp = this.route.snapshot.paramMap.get('questionId');
    if(temp === null || isNaN(Number(temp))) return;

    this.questionId = Number(temp);

    this.questionService.getQuestion(this.questionId).subscribe(q => {
      this.isLoading = false;
      
      if(q === undefined) return;

      this.question = q;
    })
  }

  onSubmit(): void {
    if(this.answerForm.invalid) return;
    this.isServerProcessing = true;
    let response = this.answerForm.value;

    let timestamp = new Date();
    let time = timestamp.toTimeString().split(' ')[0];
    let dateInfo = timestamp.toDateString().split(' ');
    let date = dateInfo[1] + " " + dateInfo[2] + ", " + dateInfo[3];

    let answer: Answer = {
      id: -1,
      questionId: this.questionId!,
      text: response.text!,
      ansBy: "Anon",
      ansAt: date + " @ " + time
    };

    this.answerService.addAnswer(answer).subscribe((res) => {
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
        content: "Answer Added!",
        animation: { type: "slide", duration: 400 },
        position: { horizontal: "center", vertical: "bottom" },
        type: {style: "success", icon: true}
      });
      this.router.navigate(['../../question/' + this.questionId]);
    })
    
  }

}
