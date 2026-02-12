import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AboutComponent } from "src/app/components/about/about.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { ToolbarComponent } from "src/app/components/toolbar/toolbar.component";
import { ProjectsComponent } from "src/app/components/projects/projects.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, AboutComponent, FooterComponent, HeaderComponent, ToolbarComponent, ProjectsComponent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
