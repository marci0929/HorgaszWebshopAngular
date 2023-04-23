import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterbuyComponent } from './afterbuy.component';

describe('AfterbuyComponent', () => {
  let component: AfterbuyComponent;
  let fixture: ComponentFixture<AfterbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
