import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YsPieComponent, RotateDirective } from './ys-pie.component';

@NgModule({
  imports: [CommonModule],
  declarations: [YsPieComponent, RotateDirective],
  exports: [YsPieComponent]
})
export class YsPieModule { }
