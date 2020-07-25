import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from 'app/navbar/navbar.component';
import { ProductComponent } from 'app/product/product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('navBar') navBar: NavbarComponent;
  @ViewChild('product') product: ProductComponent;

  constructor() { }

  ngOnInit() {
    this.product.eventEmitNavBar.subscribe((res: number) => {
      this.navBar.countProduct = res;
    });
  }

}
