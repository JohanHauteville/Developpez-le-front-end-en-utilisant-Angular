import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartNxComponent } from './line-chart-nx.component';

describe('LineChartNxComponent', () => {
  let component: LineChartNxComponent;
  let fixture: ComponentFixture<LineChartNxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartNxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartNxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
