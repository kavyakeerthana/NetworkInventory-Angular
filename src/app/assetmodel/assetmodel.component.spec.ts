import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetmodelComponent } from './assetmodel.component';

describe('AssetmodelComponent', () => {
  let component: AssetmodelComponent;
  let fixture: ComponentFixture<AssetmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetmodelComponent]
    });
    fixture = TestBed.createComponent(AssetmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
