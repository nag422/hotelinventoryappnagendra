import { Injectable, Inject } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
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
  // httpextraheader = new HttpHeaders({token:"nag35lnfsdf0w45245", authToken:"jsdflsdf898p"}); //comment for work httpinterceptor
  // rxjs property
  // headers interception
  // getRooms$=this.http.get<RoomList[]>('/api/rooms',{headers:this.httpextraheader}).pipe(
  //   shareReplay(1)
  // );                                                                                        //comment for work httpinterceptor
  // global httpheader interception and to work this below have to comment up line so commenting.
  getRooms$=this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  );   
  // dependency injection
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, 
  private http: HttpClient ) {
    console.log(environment.apiEndpoint);
    console.log(config.apiEndpoint)
    console.log("Rooms service is initialized...")
   }
  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms')
  }
  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }
  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }
  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true,
    });
    return this.http.request(request);
  }
}
