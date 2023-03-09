import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBooksComponent } from './shopping-books.component';

describe('ShoppingBooksComponent', () => {
  let component: ShoppingBooksComponent;
  let fixture: ComponentFixture<ShoppingBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
