import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem],
})
export class AppComponent {


constructor(private router: Router, private menuCtrl: MenuController) {}

async navigate(section: string) {
  await this.menuCtrl.close();

  setTimeout(() => {
    this.router.navigate(['/home'], {
      fragment: section
    });
  }, 250);
}

}
