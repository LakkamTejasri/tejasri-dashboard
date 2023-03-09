import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceBooksComponent } from './science-books.component';

describe('ScienceBooksComponent', () => {
  let component: ScienceBooksComponent;
  let fixture: ComponentFixture<ScienceBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
