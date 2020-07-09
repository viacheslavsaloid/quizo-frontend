import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAuthComponent } from './game-auth.component';

describe('GameAuthComponent', () => {
  let component: GameAuthComponent;
  let fixture: ComponentFixture<GameAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameAuthComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
