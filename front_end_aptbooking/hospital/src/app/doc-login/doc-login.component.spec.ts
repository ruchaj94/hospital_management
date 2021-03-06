import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocLoginComponent } from './doc-login.component';

describe('DocLoginComponent', () => {
  let component: DocLoginComponent;
  let fixture: ComponentFixture<DocLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
