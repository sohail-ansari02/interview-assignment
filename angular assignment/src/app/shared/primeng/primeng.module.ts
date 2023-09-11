import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  exports: [
    TableModule,
    PaginatorModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
  ],
})
export class PrimengModule {}
