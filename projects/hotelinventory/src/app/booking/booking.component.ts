import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { BookingService } from './booking.service';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;


  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(private configService: ConfigService, private fb: FormBuilder, private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // const roomId = this.route.snapshot.children[0].paramMap.get("roomid");
    console.group("%cActivated route","color:white; background-color:brown; padding:0.3em");
    console.log(this.route.snapshot.children[0]?.paramMap.get("roomid"))
    console.groupEnd()
    this.bookingForm = this.fb.group({
      BookingId: [''],
      roomId: new FormControl({ value: 2, disabled:false }, { validators: [Validators.required]}),
      guestEmail: ['', {updateOn:'blur', validators: [Validators.required]}], //can do also in template driven forms.
      checkinDate: new Date,
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', {updateOn: 'blur'}],
      guestName: ['', [Validators.required, Validators.minLength(3), CustomValidator.ValidateName, CustomValidator.ValidateSpecialChar('*')]],
      address: this.fb.group({
        addressLine1: ['',[Validators.required]],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),

      guests: this.fb.array([this.fb.group({ guestName: ['',[Validators.required]], age: new FormControl('') })]),
      tnc: new FormControl(false, {validators: [Validators.required, Validators.requiredTrue]}),
    }, { updateOn: 'blur', Validators: [CustomValidator.validatedate]});
    
    // below gives result like onChange input or something. this is the bad practice 
    // this.bookingForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // })

    // it sends every requests
    // this.bookingForm.valueChanges.pipe(
    //   mergeMap((data) => this.bookingService.bookRoom(data))
    //   ).subscribe((data) => console.log(data));

    // switchMap cancels the prev request if there is new in the flow.
    // this.bookingForm.valueChanges.pipe(
    //   switchMap((data) => this.bookingService.bookRoom(data))
    //   ).subscribe((data) => console.log(data));

    // exhaustMap sequenceally waits for the prev request, and after that request combine remaining all events for next request. 
    // this.bookingForm.valueChanges.pipe(
    //   exhaustMap((data) => this.bookingService.bookRoom(data))
    //   ).subscribe((data) => console.log(data));
  }

  bookRoom(): void {
    console.group("%cbooking form submitted", "color:white; background-color:#3cb371; padding:0.3em; font-size:12px")
    console.log(this.bookingForm.value) //instead of value we can use getRawValue() it gives the disabled field values also.
    console.groupEnd();
  }

  addGuest(): void {
    this.guests.push(this.fb.group({ guestName: ['', [Validators.required]], age: new FormControl('')}))
    console.group("%cGuest is added", "color:white; background-color:#13c887; padding:0.3em; font-size:12px")
    console.log(this.bookingForm.value)
    console.groupEnd();
  }
  addPassport():void {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  removePassport():void {
    if(this.bookingForm.get("passport")) {
      this.bookingForm.removeControl('passport');
    }    
  }
  deleteGuestrow(i:number):void {
    this.guests.removeAt(i)
  }
  ResetForm():void {
    this.bookingForm.reset({
      BookingId: '',
      roomId: '',
      guestEmail: '',
      checkinDate: new Date,
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      }),

      guests: this.fb.array([this.fb.group({ guestName: '', age: new FormControl('') })]),
      tnc: new FormControl(false, [Validators.required, Validators.requiredTrue])
    })
  }

  setFormValue():void {
    // it requires provision of all values to this form. actually below may not be works.
    this.bookingForm.setValue({
      BookingId: '',
      roomId: '',
      guestEmail: '',
      checkinDate: new Date,
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      }),

      guests: this.fb.array([this.fb.group({ guestName: '', age: new FormControl('') })]),
      tnc: new FormControl(false, [Validators.required, Validators.requiredTrue])
    })
  }
  setPatchFormValue():void{
    // in this we can pass empty values also.
    this.bookingForm.patchValue({
      BookingId: '',
      roomId: '',
      guestEmail: '',
      checkinDate: new Date,
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      }),

      guests: this.fb.array([this.fb.group({ guestName: '', age: new FormControl('') })]),
      tnc: new FormControl(false, [Validators.required, Validators.requiredTrue])
    })
  }
}

