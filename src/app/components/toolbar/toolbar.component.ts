import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { moon, sunnyOutline } from 'ionicons/icons';
import { IonButtons, IonMenuButton, IonButton, IonIcon, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [IonButtons, IonMenuButton, IonButton, IonIcon, IonToolbar],
})
export class ToolbarComponent implements OnInit {

  isDark = false;

  constructor() {
    addIcons({
      moon,
      'sunny-outline': sunnyOutline,
    });
  }

  ngOnInit() {
    // 1️⃣ verifica se já existe tema salvo
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.enableDark();
    }
  }

  toggleTheme() {
  this.isDark ? this.enableLight() : this.enableDark();
}

private enableDark() {
  document.documentElement.classList.add('dark'); // 🔥 AQUI
  localStorage.setItem('theme', 'dark');
  this.isDark = true;
}

private enableLight() {
  document.documentElement.classList.remove('dark'); // 🔥 AQUI
  localStorage.setItem('theme', 'light');
  this.isDark = false;
}

}
