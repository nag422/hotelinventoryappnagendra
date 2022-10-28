import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomsList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe",
      amenities: "hotwater",
      price: 20,
      photos: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Dec-2022'),
      rating: 3.44545
    },
    {
      roomNumber: 2,
      roomType: "Single bedroom",
      amenities: "hotwater",
      price: 20,
      photos: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Dec-2022'),
      rating: 2.44545
    },
    {
      roomNumber: 3,
      roomType: "Double bedroom",
      amenities: "hotwater",
      price: 20,
      photos: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Dec-2022'),
      rating: 1.44545
    }
  ]

  constructor() { }
  getRooms() {
    return this.roomsList;
  }
}
