import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PT15211-WEB';
  name = 'vuonglq';
  products = [
    {
      name: 'TV',
      price: 2000
    },
    {
      name: 'Máy giặt',
      price: 2000
    },
    {
      name: 'Điều hòa',
      price: 2000
    }
  ];
  changeName(e){
    this.name = e.target.value;
    console.log(this.name);
  }
}
