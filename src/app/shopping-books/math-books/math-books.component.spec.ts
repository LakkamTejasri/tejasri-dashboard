import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathBooksComponent } from './math-books.component';

describe('MathBooksComponent', () => {
  let component: MathBooksComponent;
  let fixture: ComponentFixture<MathBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
