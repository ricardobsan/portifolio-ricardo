import { Component, OnInit } from '@angular/core';
import {  IonGrid, IonCol, IonRow, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ IonText, IonRow, IonCol, IonGrid, ],
  standalone: true,
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
