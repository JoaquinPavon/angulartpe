import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritogamersComponent } from './carritogamers.component';

describe('CarritogamersComponent', () => {
  let component: CarritogamersComponent;
  let fixture: ComponentFixture<CarritogamersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritogamersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritogamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
