import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DxReportTemplateComponent } from 'src/app/components/dx-report-template/dx-report-template.component';

const routes: Routes = [
  {path:'', component: DxReportTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
