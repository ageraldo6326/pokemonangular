import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portipo } from './portipo';

describe('Portipo', () => {
  let component: Portipo;
  let fixture: ComponentFixture<Portipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portipo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portipo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
