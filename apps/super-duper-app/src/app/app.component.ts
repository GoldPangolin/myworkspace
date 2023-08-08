import { Component } from '@angular/core';
import { exampleProducts, tree } from '@myworkspace/mock-data';
@Component({
  selector: 'myworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'super-duper-app';
  products = exampleProducts;
  testTree = tree;
}
