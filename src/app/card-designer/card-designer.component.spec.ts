import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDesignerComponent } from './card-designer.component';

describe('CardDesignerComponent', () => {
  let component: CardDesignerComponent;
  let fixture: ComponentFixture<CardDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDesignerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
