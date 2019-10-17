import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialidadeFormComponent } from './especialidade-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EspecialidadeFormComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EspecialidadeFormComponent,
  ],
  entryComponents: [
    EspecialidadeFormComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class EspecialidadeFormModule { }
