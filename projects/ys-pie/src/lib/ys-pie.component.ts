import { Component, OnInit, Input, ElementRef, Directive, ViewChildren, QueryList, AfterViewInit, ChangeDetectionStrategy, } from '@angular/core';

export type Direction = 'bottom' | 'top';

@Directive({
  selector: '[ysRotate]'
})
export class RotateDirective implements OnInit{
  @Input('ysRotate') rotateDeg: number;
  constructor(private el: ElementRef){}
  ngOnInit(){
    this.el.nativeElement.style.transform = `rotate(${this.rotateDeg}deg)`;
  }
}

@Component({
  selector: 'ys-pie',
  templateUrl: './ys-pie.component.html',
  styleUrls: ['./ys-pie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YsPieComponent implements OnInit, AfterViewInit {

  @Input()
  set color(color: string) {
    this._updateCssVariable(this._size, color);
    this._color = color;
  }
  get color(): string {
    return this._color;
  }
  @Input()
  set direction(direction: Direction){
    this.startDegree = (direction === 'bottom') ? -180 : 0;
  }

  @Input()
  set percentage(percentage: number) {
    percentage = Math.max(0, Math.min(100, percentage));
    const number = Math.round(percentage/100*24);
    this._updateTransition(this.filledNumber, number);
    this.filledNumber = number;
  };
  @Input()
  set size(size: number) {
    this._size = Math.max(0, size);
    this._updateExistingSize(size);
    this._updateCssVariable(size, this._color);
  }
  get size() :number {
    return this._size;
  }
  @Input() label: string;
  @ViewChildren('piece') pieces: QueryList<ElementRef>;
  private cssVariable: string = '--size: SIZE_VALUEpx; --length: LENGTH_VALUEpx; --active: COLOR_VALUE;';
  private maxLineNumber: number = 24;
  filledNumber: number = 0;
  piePieces: Array<number> = new Array<number>(this.maxLineNumber);
  startDegree: number = 0;
  fontSize: number = 12;
  _color: string = '#CCCCCC';
  _size: number = 200;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this._updateCssVariable(this._size, this._color);
  }

  ngAfterViewInit(){
    this._updateExistingSize(this._size);
  }

  _updateTransition(currentNumber:number , nextNumber: number) {
    if(!this.pieces) {
      return;
    }
    let number = (nextNumber < currentNumber) ? currentNumber - nextNumber : 0;
    this.pieces.forEach((piece, index) => {
      if(currentNumber <= index && nextNumber > index) {
        piece.nativeElement.style.transitionDelay = `${0.1*number}s`;
        number+=1;
      }
      else if(currentNumber > index && nextNumber <= index) {
        piece.nativeElement.style.transitionDelay = `${0.1*number}s`;
        number-=1;
      }
    });
  }

  _updateCssVariable(size: number, color: string){
    const variable = this.cssVariable.replace(/SIZE_VALUE/g, `${size/2}`).replace(/LENGTH_VALUE/g, `${size/10}`).replace(/COLOR_VALUE/g, color);
    this.element.nativeElement.style.cssText = variable;
  }

  _updateExistingSize(size: number) {
    this.fontSize = size * 0.3;
    if(this.pieces) {
      this.pieces.forEach((piece, index) => {
        piece.nativeElement.style.transitionDelay = '';
        piece.nativeElement.style.transformOrigin = `${size/2}px ${size/2}px`;
      });
    }
  }
}
