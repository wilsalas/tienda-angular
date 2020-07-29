import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from 'app/auth-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() eventEmitNavBar = new EventEmitter<number>();
  pathImg: string = "../../assets/fotos proyecto final/imagenesBase/";
  title: string = "Catálogo de productos";
  listData: any;
  listDataCopy: any;
  details: Object = {};
  data: number = 0;

  constructor(private servicio: AuthServiceService) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    let title = localStorage.getItem('title'),
      details = localStorage.getItem('productDetails');
    if (title) {
      this.title = title;
    }
    if (details) {
      this.details = JSON.parse(details);
    }
    this.servicio.obtenerProductos().subscribe((res: any) => {
      this.listData = this.listDataCopy = res;
    });
  }

  changeTitle(newTitle: string) {
    if (newTitle === '0') {
      this.title = 'Catálogo de productos';
    } else if (newTitle === '1') {
      this.title = 'Carrito de compras';
    } else {
      this.title = newTitle;
    }
    localStorage.setItem('title', this.title);
  }

  getDetailsProduct(data: any) {
    this.details = data;
    this.changeTitle(data.name);
    localStorage.setItem("productDetails", JSON.stringify(data));
  }

  searchProduct(search: string) {
    this.listData = this.listDataCopy.filter((item: any) => new RegExp(search, 'i').test(item.name));
  }

  sendData() {
    this.data += 40
    this.eventEmitNavBar.emit(this.data)
    console.log('reat')
  }

}
