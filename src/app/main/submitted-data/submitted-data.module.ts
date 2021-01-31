import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubmittedDataComponent } from './submitted-data.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  SubmittedDataComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SubmittedDataModule { }
