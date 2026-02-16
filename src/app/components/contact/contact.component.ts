import { Component, OnInit } from '@angular/core';
import { IonCol, IonButton, IonRow, IonGrid, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [IonIcon, IonGrid, IonRow, IonButton, IonCol],
})
export class ContactComponent  implements OnInit {

  constructor() {
    addIcons({
    mailOutline
    })
   }

  ngOnInit() {}

}
