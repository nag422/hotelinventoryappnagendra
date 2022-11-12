import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {path:'employee', component:EmployeeComponent},
  {path:'rooms', component:RoomsComponent},
  {path:'rooms/add', component:RoomsAddComponent},
  {path:'rooms/:id', component:RoomsBookingComponent},
  {path:'', redirectTo: '/rooms', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot can configure once only.
  exports: [RouterModule]
})
export class AppRoutingModule { }
