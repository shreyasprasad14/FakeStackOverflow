import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question/question.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  isSearching = false;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updateQuery(): void {

  }

  search(searchQuery: string): void {
    this.isSearching = true;
    if(!searchQuery || searchQuery.length === 0)  {
      this.router.navigate(['questions']);
      return;
    }

    let queryList: string[] = searchQuery.split(" ");
    let queryListString: string = queryList.toString();
    this.router.navigate(['questions'], {queryParams: {query: queryListString}});
  }

}
