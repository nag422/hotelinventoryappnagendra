import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopFooterComponent } from './top-footer/top-footer.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';

@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    TopFooterComponent,
    BottomFooterComponent  // Declare NavbarComponent here
  ],
  imports: [
    CommonModule  // Import CommonModule for Angular common directives
  ],
  exports: [
    HomepageComponent  // Export HomepageComponent if it needs to be used elsewhere
  ]
})
export class HomepageModule { }
