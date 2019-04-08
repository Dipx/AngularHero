import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoObservableComponent } from './crypto-observable.component';

describe('CryptoObservableComponent', () => {
  let component: CryptoObservableComponent;
  let fixture: ComponentFixture<CryptoObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
