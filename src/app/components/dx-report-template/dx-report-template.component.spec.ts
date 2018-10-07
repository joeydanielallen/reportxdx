import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxReportTemplateComponent } from './dx-report-template.component';

describe('DxReportTemplateComponent', () => {
  let component: DxReportTemplateComponent;
  let fixture: ComponentFixture<DxReportTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxReportTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxReportTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
