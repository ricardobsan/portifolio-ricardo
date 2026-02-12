import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoGithub, openOutline, } from 'ionicons/icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent implements OnInit {

  activeIndex = 0;

  constructor() {
    addIcons({
      openOutline,
      logoGithub
    })

  }

  ngOnInit() { }

  projects = [
    {
      title: 'Developer Portfolio',

      image: 'assets/images-projects/portifolio.png',
      techs: ['Angular', 'Ionic', 'Firebase'],
      description: 'Portfólio pessoal criado para apresentar projetos e habilidades como desenvolvedor front-end.',
      githubUrl: 'https://github.com/ricardobsan/portifolio-ricardo.git',
      liveUrl: 'https://devricardosantos.com.br'
    },
    {
      title: 'OdontoCare Website',
      description: 'Website institucional responsivo para clínica odontológica.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images-projects/odonto.png',
      githubUrl: 'https://github.com/ricardobsan/projetoOdonto.git',
      liveUrl: 'https://ricardobsan.github.io/projetoOdonto/index.html'
    },
    {
      title: 'Task List App',
      description: 'Aplicação para gerenciamento de tarefas com status e subtarefas.',
      techs: ['Angular', 'TypeScript', 'CSS'],
      image: 'assets/images-projects/todoList.png',
      githubUrl: 'https://github.com/ricardobsan/ListaDeTarefas.git',
      liveUrl: 'https://ricardobsan.github.io/ListaDeTarefas/'
    },
    {
      title: 'Calculator App',
      description: 'Calculadora simples com operações básicas.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images-projects/calc.png',
      githubUrl: 'https://github.com/ricardobsan/ProjetoCalculadoraSimples.git',
      liveUrl: 'https://ricardobsan.github.io/ProjetoCalculadoraSimples/'
    },

    {
      title: 'Em breve',
      image: 'assets/images-projects/em-breve.png',
      description: 'Em Breve!'
    },
  ];

  get activeProject() {
    return this.projects[this.activeIndex];
  }

  onSlideChange(event: any) {
    this.activeIndex = event.target.swiper.realIndex;
  }

}
