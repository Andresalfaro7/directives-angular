import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {products} from './products.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Productos';

  products: products[]=[
    new products('Monitor', 4),
    new products('CPU', 5),
    new products('Teclado', 200),
    new products('Mouse', 150),
    new products('Audifonos', 350),
    new products('Mouse Pad', 2),
    new products('UPS', 850),
    new products('Webcam', 950),
  ];

  nameProduct: string = "";
  stockProduct: number = 0;

  saveProduct(){
    //if
    let product = new products(this.nameProduct, this.stockProduct);

    this.products.push(product);
  }
}
