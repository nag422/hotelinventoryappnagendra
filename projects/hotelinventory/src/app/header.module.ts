import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ] // if uses outside of header module then have to export this. find in rooms.module.ts
})
export class HeaderModule { }
