import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import Question from 'src/models/questionModel';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly QUESTION_URL = environment.apiURL + "/question/";

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http
        .get<Question[]>(this.QUESTION_URL)
        .pipe(catchError(this.handleError<Question[]>('getQuestions', [])));
  }

  getQuestion(id: number): Observable<Question> {
    return this.http
        .get<Question>(this.QUESTION_URL + id)
        .pipe(catchError(this.handleError<Question>(`getQuestion id=${id}`)));
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http
        .post<Question>(this.QUESTION_URL, question)
        .pipe(catchError(this.handleError<Question>('addQuestion', {id: -1})));
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
