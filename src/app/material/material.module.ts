import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule  } from "@angular/material";

const MaterialComponent =[
    MatButtonModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponent
  ],
  exports: [MaterialComponent]
})
export class MaterialModule { }
