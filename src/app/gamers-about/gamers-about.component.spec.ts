import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamersAboutComponent } from './gamers-about.component';

describe('GamersAboutComponent', () => {
  let component: GamersAboutComponent;
  let fixture: ComponentFixture<GamersAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamersAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamersAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
