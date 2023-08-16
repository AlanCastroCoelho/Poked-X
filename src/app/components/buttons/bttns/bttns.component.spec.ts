import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BttnsComponent } from './bttns.component';

describe('BttnsComponent', () => {
  let component: BttnsComponent;
  let fixture: ComponentFixture<BttnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BttnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BttnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
