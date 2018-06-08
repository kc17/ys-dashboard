import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './prism.css']
})
export class AppComponent {
  private percentage: number = 20;
  color: string = '#4ECDC4';
  size: number = 200;

  add(){
    if(this.percentage < 100) {
      this.percentage += 10;
    }
  }

  reduce(){
    if(this.percentage > 0) {
      this.percentage -= 10;
    }
  }

  changeColor() {
    this.color = (this.color === '#4ECDC4') ? '#23a7d7' : '#4ECDC4';
  }

  changeSize() {
    this.size = (this.size > 400) ? 200 : this.size + 50;
  }


}
