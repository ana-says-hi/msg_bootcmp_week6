import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserComponent } from './single-user.component';

describe('UserComponent', () => {
  let component: SingleUserComponent;
  let fixture: ComponentFixture<SingleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
