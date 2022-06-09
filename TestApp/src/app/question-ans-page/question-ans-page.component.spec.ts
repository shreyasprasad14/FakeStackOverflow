import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnsPageComponent } from './question-ans-page.component';

describe('QuestionAnsPageComponent', () => {
  let component: QuestionAnsPageComponent;
  let fixture: ComponentFixture<QuestionAnsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAnsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAnsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
