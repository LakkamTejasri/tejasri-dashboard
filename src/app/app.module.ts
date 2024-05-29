import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';




import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { MycvComponent } from './mycv/mycv.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ShoppingBooksComponent } from './shopping-books/shopping-books.component';
import { MathBooksComponent } from './shopping-books/math-books/math-books.component';
import { ScienceBooksComponent } from './shopping-books/science-books/science-books.component';
import { CoachMarksComponent } from './coach-marks/coach-marks.component';
import { AddcartComponent } from './shopping-books/addcart/addcart.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavigationComponent,
    MycvComponent,
    MainDashboardComponent,
    ShoppingBooksComponent,
    MathBooksComponent,
    ScienceBooksComponent,
    CoachMarksComponent,
    AddcartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatBadgeModule
  ],
  providers: [{
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
