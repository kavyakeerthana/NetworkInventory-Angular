import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssetComponent } from './view-asset.component';

describe('ViewAssetComponent', () => {
  let component: ViewAssetComponent;
  let fixture: ComponentFixture<ViewAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAssetComponent]
    });
    fixture = TestBed.createComponent(ViewAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
