import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  styles: [
    `
    p {
      color: green;
    }
    `
  ]
})
export class HomepageComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked {
  pagename:string = "HomePage";
  tajhotel:string = "Taj Hotel";
  @ViewChild(FooterComponent, { static: false}) footerComponent!: FooterComponent
  @ViewChild("user", { read: ViewContainerRef}) vcr!: ViewContainerRef
  @ViewChild("propsref", { static: true}) propsRef!: ElementRef
  constructor() { }

  ngOnInit(): void {
    console.log(this.footerComponent, "----Footer Component----");
    const propsRefCurrent = this.propsRef.nativeElement;
    propsRefCurrent.innerText = "This is from props";
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngAfterViewInit(): void {
    console.log(this.footerComponent, "----Footer Component After view init----");
    const componentRef = this.vcr.createComponent(FooterComponent)
    componentRef.instance.title = "Footer Component FROm Bookaroom";
  }
  ngAfterViewChecked(): void {
    console.log(this.footerComponent, "----Footer Component After view checked----");
  }
  navtitleChangeFunParent($event: any){
    this.tajhotel = $event;
  }
}
