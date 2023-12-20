import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssetDetailComponent } from './update-asset-detail.component';

describe('UpdateAssetDetailComponent', () => {
  let component: UpdateAssetDetailComponent;
  let fixture: ComponentFixture<UpdateAssetDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAssetDetailComponent]
    });
    fixture = TestBed.createComponent(UpdateAssetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
