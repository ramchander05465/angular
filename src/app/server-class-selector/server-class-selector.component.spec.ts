import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerClassSelectorComponent } from './server-class-selector.component';

describe('ServerClassSelectorComponent', () => {
  let component: ServerClassSelectorComponent;
  let fixture: ComponentFixture<ServerClassSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerClassSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerClassSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
