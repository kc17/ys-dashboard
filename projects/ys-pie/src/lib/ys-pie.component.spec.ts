import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YsPieComponent } from './ys-pie.component';
import { YsPieModule } from './ys-pie.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('YsPieComponent', () => {
  let component: TestComponent;
  let pieComponent: YsPieComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [YsPieModule],
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pieComponent = fixture.debugElement.query(By.css('ys-pie')).componentInstance as YsPieComponent;
  });

  it('The size should be changed based on setting', () => {
    expect(pieComponent.size).toBe(100);

    component.size = 150;
    fixture.detectChanges();
    expect(pieComponent.size).toBe(150);

    component.size = -50;
    fixture.detectChanges();
    expect(pieComponent.size).toBe(0);
  });

  it('The color should be changed based on setting', () => {
    expect(pieComponent.color).toBe('#23a7d7');

    component.color = '#CCCCCC';
    fixture.detectChanges();
    expect(pieComponent.color).toBe('#CCCCCC');
  });

  it('The range of filled number should be 0 to 100', () => {
    expect(pieComponent.filledNumber).toBe(5);

    component.percentage = 60;
    fixture.detectChanges();
    expect(pieComponent.filledNumber).toBe(14);

    component.percentage = 120;
    fixture.detectChanges();
    expect(pieComponent.filledNumber).toBe(24);
  });

  it('The piece number of pie should be 24', () => {
    expect(pieComponent.pieces.length).toBe(24);
  });
  it('The label should be 20', () => {
    expect(pieComponent.label).toBe('20');
  });
});

@Component({
  selector: 'test-root',
  template: `
    <ys-pie [size]="size" [percentage]="percentage" [color]="color" [label]="label"></ys-pie>
  `
})
class TestComponent {
  size: number = 100;
  percentage: number = 20;
  color: string = '#23a7d7';
  label: string = '20';
}
