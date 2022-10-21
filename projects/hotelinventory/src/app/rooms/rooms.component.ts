import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = "jobowler";
  checkingprpBinding = 10;
  isithidden = false;
  rooms: Room = {
    availableRooms: 20,
    bookedRooms: 0,
    totalRooms: 0
  };
  roomsList: RoomList[] = []
  selectedRoom!: RoomList;
  title = 'rooms List';
  // with static true can avoid conflicts between header ngOninit method with here ngOnint
  @ViewChild(HeaderComponent, { static: true }) headerComp!:HeaderComponent;


  constructor() { }

  ngOnInit(): void {
    this.roomsList = [
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
  }

  ngAfterViewInit(): void {
    console.log('after viewinit')
    this.headerComp.title = "Welcome from rooms component";
  }
  ngAfterViewChecked(): void {
    console.log('after vieewchecked')
  }
  toggle(): void {
    this.isithidden = !this.isithidden;
    this.title = "New title has been changed."
  }
  selectingRoom(room: RoomList){
    this.selectedRoom = room;
  }
  addRoom(){
    const roomsdata = this.roomsList[2];
    this.roomsList = ([...this.roomsList, {...roomsdata, roomType: 'new furniture'}]);
    // this.roomsList.push(this.roomsList[2])
  }

}
