import { Component, Input } from '@angular/core';
import mathJSon from '../../../assets/jsonfiles/books/mathbooks.json'

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent {

  gdata:any[] =[];
  ngOnInit(): void {
    this.gdata = mathJSon
   }

}
