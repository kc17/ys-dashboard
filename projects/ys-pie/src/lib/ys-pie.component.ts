import { Component, OnInit, Input, ElementRef, Directive, ViewChildren, ViewChild, QueryList, AfterViewInit} from '@angular/core';

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
  styleUrls: ['./ys-pie.component.scss']
})
export class YsPieComponent implements OnInit, AfterViewInit {

  @Input() color: string = '#CCCCCC';
  @Input() size: number = 200;
  @Input()
  set label(label: string) {
    this.labelInternal = label;
    this.labelRef.nativeElement.style.fontSize = `${this.size*0.3}px`;
  };
  @Input()
  set percentage(percentage: number){
    const number = Math.round(percentage/100*24);
    this.updateTransition(this.filledNumber, number);
    this.filledNumber = number;
  };
  @ViewChildren('piece') pieces: QueryList<ElementRef>;
  @ViewChild('label') labelRef: ElementRef;
  private maxLineNumber: number = 24;
  filledNumber: number = 0;
  piePieces: Array<number> = new Array<number>(this.maxLineNumber);
  labelInternal: string;
  private cssVariable: string;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.cssVariable = `--size: ${this.size/2}px; --length: ${this.size/10}px; --active:${this.color};`;
    this.element.nativeElement.style.cssText = this.cssVariable;
  }

  ngAfterViewInit(){
    this.pieces.forEach((piece, index) => {
      piece.nativeElement.style.transformOrigin = `${this.size/2}px ${this.size/2}px`;
    });
  }

  updateTransition(currentNumber:number , nextNumber: number) {
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
}
