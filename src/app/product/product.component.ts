import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() eventEmitNavBar = new EventEmitter<number>();
  datas = [{}, {}, {}, {}, {}]
   data = 0
  constructor() { }

  ngOnInit() { 

    
  }
  
  sendData() {
    this.data += 40
    this.eventEmitNavBar.emit(this.data)
    console.log('reat')
  }

}
