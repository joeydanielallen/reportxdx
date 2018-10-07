import { Component, OnInit } from '@angular/core';
import { ReportTemplateModel } from 'src/app/models/reportTemplateModel';


@Component({
  selector: 'reportx-dx-report-template',
  templateUrl: './dx-report-template.component.html',
  styleUrls: ['./dx-report-template.component.css']
})
export class DxReportTemplateComponent implements OnInit {
  
  data: any = {};
  isLoadingData = false;
  model: ReportTemplateModel = null;

  selectReport(template:ReportTemplateModel):void {
    this.data = null;
    this.model = template;
  }

  constructor() { }

  ngOnInit() {
  }

  getReportData(): void {
    this.isLoadingData = true;

    this.data = this.model.id == '1' ? this.reportData1 : this.reportData2;

    this.isLoadingData = false;
  }

  reportTemplates: ReportTemplateModel[] = [
    {
      title: "Report Title One",
      description: "Report description and detail in html.",
      id: "1",
      columns:[
        {
          name: "ColumnOne",
          type: "string",
          title: "My Column one",
          display: true,
          format:"",
          order: 1
        },
        {
          name: "ColumnTwo",
          type: "number",
          title: "My Column two",
          display: true,
          format:"currency",
          order: 2
        },
        {
          name: "ColumnThree",
          type: "date",
          title: "",
          display: true,
          format:"",
          order: 3
        },
        {
          name: "ColumnFour",
          type: "string",
          title: "My Column four",
          display: false,
          format: null,
          order: 4
        }
      ]
    },
    {
      title: "Report Title Two",
      description: "Report description and detail in html.",
      id: "2",
      columns:[
        {
          name: "ColumnOne",
          type: "string",
          title: "My Column one",
          display: true,
          format:"",
          order: 1
        },
        {
          name: "ColumnTwo",
          type: "number",
          title: "My Column two",
          display: true,
          format:"currency",
          order: 2
        },
        {
          name: "ColumnThree",
          type: "date",
          title: "",
          display: true,
          format:"",
          order: 3
        },
        {
          name: "ColumnFour",
          type: "string",
          title: "My Column four",
          display: false,
          format: null,
          order: 4
        }
      ]
    }
  ];

  reportData2 = [

  ];

  reportData1 = [
    {ColumnOne:"row one", ColumnTwo: 1, ColumnThree:'1/1/2019', ColumnFour: null},
    {ColumnOne:"row one", ColumnTwo: 2, ColumnThree:'1/2/2019', ColumnFour: null},
    {ColumnOne:"row one", ColumnTwo: 3, ColumnThree:'1/3/2019', ColumnFour: null},
    {ColumnOne:"row one", ColumnTwo: 4, ColumnThree:'1/4/2019', ColumnFour: null},
    {ColumnOne:"row one", ColumnTwo: 5, ColumnThree:'1/5/2019', ColumnFour: null},
    {ColumnOne:"row one", ColumnTwo: 6, ColumnThree:'1/6/2019', ColumnFour: null},
    {ColumnOne:"row one", ColumnTwo: 7, ColumnThree:'1/7/2019', ColumnFour: null},
    {ColumnOne:"row one", ColumnTwo: 8, ColumnThree:'1/8/2019', ColumnFour: null},
    {ColumnOne:"row one", ColumnTwo: 9, ColumnThree:'1/9/2019', ColumnFour: null},
    {ColumnOne:"row one", ColumnTwo: 10.90, ColumnThree:'1/10/2019', ColumnFour: null},
    {ColumnOne:"row one", ColumnTwo: 11, ColumnThree:'1/11/2019', ColumnFour: null}
  ];
}
