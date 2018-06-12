import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticManagerComponent } from './statistic-manager.component';

describe('StatisticManagerComponent', () => {
  let component: StatisticManagerComponent;
  let fixture: ComponentFixture<StatisticManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
