import { Component, OnInit } from '@angular/core';
import { IonFooter, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonFooter,],
})
export class FooterComponent  implements OnInit {
  isDark = false
  
  constructor() {}

  ngOnInit() { 
    this.syncTheme();
  }

    currentYear: number = new Date().getFullYear();

    private syncTheme() {
    this.isDark = document.body.classList.contains('dark');
  }
}
