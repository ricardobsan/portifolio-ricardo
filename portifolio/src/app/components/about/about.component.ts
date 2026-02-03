import { Component, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [IonGrid, IonRow, IonCol],
})
export class AboutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
