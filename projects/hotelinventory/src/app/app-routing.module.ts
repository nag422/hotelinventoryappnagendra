import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

const routes: Routes = [
  {path:'employee', component:EmployeeComponent, canActivate:[LoginGuard], canLoad:[LoginGuard]},  
  {path:'login', component:LoginComponent},
  {path:'rooms', loadChildren: () => import('./rooms/rooms.module').then((m) => m.RoomsModule ),/* canActivate:[LoginGuard] */},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule), /* canActivate:[LoginGuard] */ },
  { path: 'posts', component: PostCreateComponent },  
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  { path: 'comments', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },  
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot can configure once only.
  exports: [RouterModule]
})
export class AppRoutingModule { }
