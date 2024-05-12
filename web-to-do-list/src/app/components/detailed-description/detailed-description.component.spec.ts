import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedDescriptionComponent } from './detailed-description.component';

describe('DetailedDescriptionComponent', () => {
  let component: DetailedDescriptionComponent;
  let fixture: ComponentFixture<DetailedDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
