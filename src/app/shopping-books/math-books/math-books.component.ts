import { Component } from '@angular/core';
import mathJSon from '../../../assets/jsonfiles/books/mathbooks.json'

@Component({
  selector: 'app-math-books',
  templateUrl: './math-books.component.html',
  styleUrls: ['./math-books.component.scss']
})
export class MathBooksComponent {
  mathdata = mathJSon;
  mathlist:any [] =[]
  cartlength:number= 0
 
  add_cart(mathlist:any){
    mathlist.cart_count++
    if(mathlist.cart_count == 1){
    this.mathdata.push(mathlist)
    this.cartlength++
    }
  }

}
