import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachMarksComponent } from './coach-marks/coach-marks.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MycvComponent } from './mycv/mycv.component';
import { MathBooksComponent } from './shopping-books/math-books/math-books.component';
import { ScienceBooksComponent } from './shopping-books/science-books/science-books.component';
import { ShoppingBooksComponent } from './shopping-books/shopping-books.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';

const routes: Routes = [
  {path:'', redirectTo:'login' ,pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'header', component:HeaderComponent},
  {path:'dashboard',component:SidenavigationComponent,
  children: [
    {path:'mycv', component:MycvComponent},
    {path:'mydashboard',component:MainDashboardComponent},
    {path:'coachMarks',component:CoachMarksComponent},
    {path:'shoppingbooks',component:ShoppingBooksComponent,
      children:[
        {path:'mathBooks',component:MathBooksComponent},
        {path:'scienceBooks',component:ScienceBooksComponent}
      ]
     },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
