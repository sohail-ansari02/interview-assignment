import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageName: any = 'asd';
  constructor(public ar: ActivatedRoute) {}

  ngOnInit(): void {
    // this.ar.data.subscribe(console.log);
    // console.log(this.ar.snapshot.data);
    this.ar.firstChild?.data.subscribe(
      (data) => (this.pageName =  data )
    );
  }
}
