import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { environment } from 'src/environments/environment';
import Answer from 'src/models/answerModel';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private readonly ANSWER_URL = environment.apiURL + "/answer/";

  constructor(private http: HttpClient) { }
  
  getAnswer(id: number): Observable<Answer> {
    return this.http
      .get<Answer>(this.ANSWER_URL + id)
      .pipe(catchError(this.handleError<Answer>('getAnswer')));
  }

  getAnswers(questionId: number): Observable<Answer[]> {
    return this.http
        .get<Answer[]>(this.ANSWER_URL + "question/" + questionId)
        .pipe(catchError(this.handleError<Answer[]>('getAnswers', [])));
  }

  addAnswer(answer: Answer): Observable<Answer> {
    return this.http
        .post<Answer>(this.ANSWER_URL, answer)
        .pipe(catchError(this.handleError<Answer>('addAnswer', {id: -1, questionId: -1})));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
