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

  it('The size should equal to defined size: 100 px', () => {
    expect(pieComponent.size).toBe(100);
  });

  it('The color should equal to #23a7d7', () => {
    expect(pieComponent.color).toBe('#23a7d7');
  });

  it('The filled number sould be equal to five', () => {
    expect(pieComponent.filledNumber).toBe(5);
  });

  it('The piece number of pie should be 24', () => {
    expect(pieComponent.pieces.length).toBe(24);
  });
  it('The label should be 20', () => {
    expect(pieComponent.labelInternal).toBe('20');
  });
});

@Component({
  selector: 'test-root',
  template: `
    <ys-pie [size]="100" [percentage]="20" color="#23a7d7" [label]="'20'"></ys-pie>
  `
})
class TestComponent {}
