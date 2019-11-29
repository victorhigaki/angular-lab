import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BaseService } from "./services/base.service";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const importExportModule = [CommonModule, HttpClientModule, NgxDatatableModule];

@NgModule({
  declarations: [],
  imports: importExportModule,
  exports: importExportModule,
  providers: [BaseService]
})
export class SharedModule {}


