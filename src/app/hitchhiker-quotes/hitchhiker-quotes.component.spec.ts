import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitchhikerQuotesComponent } from './hitchhiker-quotes.component';

describe('HitchhikerQuotesComponent', () => {
  let component: HitchhikerQuotesComponent;
  let fixture: ComponentFixture<HitchhikerQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitchhikerQuotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HitchhikerQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
