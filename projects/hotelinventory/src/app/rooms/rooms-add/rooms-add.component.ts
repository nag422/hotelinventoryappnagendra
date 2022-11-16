import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomType:'',
    roomNumber: 0,
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos:'',
    price:0,
    rating:0,
  }
  successMessage:string = '';

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
  }
  AddRoom(roomForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      if (data){
        this.successMessage = 'Room Added successfully!'
        // roomForm.reset();
        //can use with reset form values 
        // in testing its working with when direct object values provision not working this.room varaible, have to test.
        roomForm.resetForm({
          roomType:'',
          roomNumber: 0,
          amenities: '',
          checkinTime: new Date(),
          checkoutTime: new Date(),
          photos:'',
          price:0,
          rating:0,
        });
      }
      
    })
  }

}
