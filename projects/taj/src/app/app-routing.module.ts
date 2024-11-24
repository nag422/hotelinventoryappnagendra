import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'profile-edit', component:ProfileEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
