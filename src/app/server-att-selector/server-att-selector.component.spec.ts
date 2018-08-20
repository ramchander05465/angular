import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAttSelectorComponent } from './server-att-selector.component';

describe('ServerAttSelectorComponent', () => {
  let component: ServerAttSelectorComponent;
  let fixture: ComponentFixture<ServerAttSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerAttSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerAttSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
