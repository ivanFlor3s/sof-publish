/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I18nBadgeControlComponent } from './i18n-badge-control.component';

describe('I18nBadgeControlComponent', () => {
  let component: I18nBadgeControlComponent;
  let fixture: ComponentFixture<I18nBadgeControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nBadgeControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nBadgeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
