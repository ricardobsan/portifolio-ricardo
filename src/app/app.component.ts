import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { downloadOutline, eyeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [IonIcon, IonButton, IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle],
})
export class AppComponent {


  constructor(private router: Router, private menuCtrl: MenuController) { 
        addIcons({
          downloadOutline,
          eyeOutline
        })
  }

  async navigate(section: string) {
    // Agora o ID 'mainMenu' existe no HTML
    await this.menuCtrl.close('mainMenu');

    this.router.navigate(['/home'], {
      fragment: section
    });
  }
}
