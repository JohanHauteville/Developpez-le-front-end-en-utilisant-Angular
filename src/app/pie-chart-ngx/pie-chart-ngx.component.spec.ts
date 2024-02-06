import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartNgxComponent } from './pie-chart-ngx.component';

describe('PieChartNgxComponent', () => {
  let component: PieChartNgxComponent;
  let fixture: ComponentFixture<PieChartNgxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartNgxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
