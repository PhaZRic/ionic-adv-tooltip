import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicAdvTooltip } from './ionic-adv-tooltip';

describe('IonicAdvTooltip', () => {
  let component: IonicAdvTooltip;
  let fixture: ComponentFixture<IonicAdvTooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicAdvTooltip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IonicAdvTooltip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
