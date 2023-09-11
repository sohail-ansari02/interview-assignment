import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent, TableComponent, InputComponent],
  imports: [CommonModule, PrimengModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    TableComponent,
    InputComponent,
    RouterModule
  ],
})
export class SharedModule {}
