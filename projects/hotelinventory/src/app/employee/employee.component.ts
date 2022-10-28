import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
  // the above line or provider removes then, app throws error that service is not available.
})
export class EmployeeComponent implements OnInit {
  empName: string = "Kumar";
  // the self decorator check whether the providers is provided in this file or not
  constructor(@Self() private roomsService: RoomsService) { }

  ngOnInit(): void {
  }
  checkViewContentfn(): void {
    console.log("checkViewContentfn")
  }

}
