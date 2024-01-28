import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeabookComponent } from './ideabook.component';

describe('IdeabookComponent', () => {
  let component: IdeabookComponent;
  let fixture: ComponentFixture<IdeabookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeabookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeabookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
