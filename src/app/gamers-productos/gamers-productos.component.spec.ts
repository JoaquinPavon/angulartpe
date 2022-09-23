import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamersProductosComponent } from './gamers-productos.component';

describe('GamersProductosComponent', () => {
  let component: GamersProductosComponent;
  let fixture: ComponentFixture<GamersProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamersProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamersProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
