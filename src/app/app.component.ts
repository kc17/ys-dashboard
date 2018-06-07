import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './prism.css']
})
export class AppComponent {
  private percentage: number = 20;

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


}
