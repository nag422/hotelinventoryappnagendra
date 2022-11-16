import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'employee', component:EmployeeComponent, canActivate:[LoginGuard], canLoad:[LoginGuard]},  
  {path:'login', component:LoginComponent},
  {path:'rooms', loadChildren: () => import('./rooms/rooms.module').then((m) => m.RoomsModule ),canActivate:[LoginGuard]},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule), canActivate:[LoginGuard] },
  {path:'', redirectTo: '/login', pathMatch: 'full'},  
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot can configure once only.
  exports: [RouterModule]
})
export class AppRoutingModule { }
