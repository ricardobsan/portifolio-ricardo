import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AboutComponent } from "src/app/components/about/about.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { ToolbarComponent } from "src/app/components/toolbar/toolbar.component";
import { ProjectsComponent } from "src/app/components/projects/projects.component";
import { ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, CommonModule, FormsModule, AboutComponent, FooterComponent, HeaderComponent, ToolbarComponent, ProjectsComponent]
})
export class HomePage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;

constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }

  async scrollTo(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (element) {
    const offset = 50;

    const scrollEl = await this.content.getScrollElement();

    const y =
      element.getBoundingClientRect().top +
      scrollEl.scrollTop -
      offset;

    this.content.scrollToPoint(0, y, 600);
  }
}

ngAfterViewInit() {
  this.route.fragment.subscribe(fragment => {
    if (fragment) {
      setTimeout(() => {
        this.scrollTo(fragment);
      }, 100);
    }
  });
}

}
