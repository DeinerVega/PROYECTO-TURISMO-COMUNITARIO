import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnasComponent } from './columnas.component';

describe('ColumnasComponent', () => {
  let component: ColumnasComponent;
  let fixture: ComponentFixture<ColumnasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
