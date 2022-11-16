import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from '../rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header.module';
import { RouteConfigToken } from '../services/routeConfig.service';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    HeaderModule,
    FormsModule
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: { title: 'room' }
    }
  ] //imports at app module also, i mean there also.
  // it s very usefule when child lazy routes.
})
export class RoomsModule { }
