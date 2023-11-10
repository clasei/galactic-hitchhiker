import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodButtonComponent } from './mood-button.component';

describe('MoodButtonComponent', () => {
  let component: MoodButtonComponent;
  let fixture: ComponentFixture<MoodButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoodButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
