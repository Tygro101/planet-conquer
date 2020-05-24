import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesInfoComponent } from './technologies-info.component';

describe('TechnologiesInfoComponent', () => {
  let component: TechnologiesInfoComponent;
  let fixture: ComponentFixture<TechnologiesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
