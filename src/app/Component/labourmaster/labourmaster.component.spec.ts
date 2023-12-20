import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourmasterComponent } from './labourmaster.component';

describe('LabourmasterComponent', () => {
  let component: LabourmasterComponent;
  let fixture: ComponentFixture<LabourmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
