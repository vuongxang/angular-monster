import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-unit',
  templateUrl: './product-unit.component.html',
  styleUrls: ['./product-unit.component.css']
})
export class ProductUnitComponent implements OnInit {
  @Input()  name: string;
  @Input()  price: number;
  constructor() { }

  ngOnInit(): void {
  }

}
