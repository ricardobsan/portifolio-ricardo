import { Component, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { downloadOutline, eyeOutline,  } from 'ionicons/icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [IonIcon, IonButton, IonGrid, IonRow, IonCol],
})
export class AboutComponent implements OnInit {
  aboutExpanded = false;

  constructor() {
    addIcons({
      downloadOutline,
      eyeOutline
    })
  }

  ngOnInit() { }

}
