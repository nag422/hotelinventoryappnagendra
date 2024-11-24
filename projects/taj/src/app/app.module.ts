import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { HomepageModule } from './homepage/homepage.module';
import { AboutModule } from './about/about.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
  ],
  imports: [
    MatButtonModule,
    HomepageModule,
    AboutModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
