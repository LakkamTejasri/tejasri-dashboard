import { Component } from '@angular/core';
import dsf from '../../assets/jsonfiles/coachmarks.json'

@Component({
  selector: 'app-coach-marks',
  templateUrl: './coach-marks.component.html',
  styleUrls: ['./coach-marks.component.scss']
})
export class CoachMarksComponent {
  datalist = dsf[0]
  i:number=0;
  stj:any
   
  
  shownext(){
    this.i = this.i+1;
    this.datalist = dsf[this.i]
  }
  previous(){
    this.i = this.i-1;
    this.datalist = dsf[this.i]
  }
 
}
