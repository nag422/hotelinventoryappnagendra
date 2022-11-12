import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
  id: number = 0;
  id$ !: Observable<any>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // avoid this subscription for better practices
    // this.route.params.subscribe((param) => this.id = param['id']);
    // use snapshot way
    //this.id = this.route.snapshot.params['id']; //this is also not good practice it updates new value only page refresh not state updates like react
    // rxjs pipe we will use here and also can avoid subscription by using pipe
    //this.id$ = this.route.params.pipe(map((param) => param['id'])); //better than this is paramsMap
    this.id$ = this.route.paramMap.pipe(map((param) => param.get("id")));

  }

}
