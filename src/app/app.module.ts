import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule,
         DxBulletModule,
         DxTemplateModule,
         DxButtonModule
        } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxReportTemplateComponent } from './components/dx-report-template/dx-report-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DxReportTemplateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
