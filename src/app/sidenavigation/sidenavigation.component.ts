import { Component, Pipe } from '@angular/core';
import * as data from '../../assets/jsonfiles/sidenavlist.json'
import { GcPdfViewer } from '@grapecity/gcpdfviewer';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss']
})
export class SidenavigationComponent {
  constructor( public router: Router ){
  }

navlist:any = (data as any).default
menuSubListdetails:any;
menuSubListdet = false
ngOnInit(){

}

menuSubList(indx:any){
  if(this.navlist.path != ""){
    this.menuSubListdetails = indx;
    this.menuSubListdet = !this.menuSubListdet
  }

}


}
