import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamersTandilComponent } from './gamers-tandil.component';

describe('GamersTandilComponent', () => {
  let component: GamersTandilComponent;
  let fixture: ComponentFixture<GamersTandilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamersTandilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamersTandilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
