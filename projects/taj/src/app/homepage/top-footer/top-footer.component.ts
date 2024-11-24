import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-top-footer',
  templateUrl: './top-footer.component.html',
  styleUrls: ['./top-footer.component.scss']
})
export class TopFooterComponent implements OnInit, AfterContentInit {
  @ContentChild(FooterComponent) footerComponent !: FooterComponent
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log(this.footerComponent, "----Footer Component----");
    this.footerComponent.title = "Footer Component FROm TopFooter versatile";
  }

}
