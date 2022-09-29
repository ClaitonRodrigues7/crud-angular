import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrosDialogComponent } from './components/erros-dialog/erros-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    ErrosDialogComponent,
    CategoryPipe

  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrosDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
