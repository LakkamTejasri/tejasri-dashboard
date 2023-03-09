import { OnInit,Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('scroller1')
  scroller!: ElementRef<any>;
  title = 'tejasri-dashboard';
  
  constructor( public router: Router ){
  }
  ngOnInit(): void {
    const div = this.scroller.nativeElement as HTMLDivElement;
    div.addEventListener('mouseover', e => {
      console.log('Mouse Over');
    });
    div.addEventListener('mouseout', e => {
      console.log('Mouse Out');
    });    
  }
}
