/* بسم الله الرحمن الرحیم */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleButtonComponent } from './components/simple-button/simple-button.component';

@NgModule({
  declarations: [
    SimpleButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SimpleButtonComponent
  ]
})
export class SharedModule { }
