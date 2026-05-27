import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../shared/components/project-card/project-card.component';
import { Iprojectcard } from '../shared/interfaces/iprojectcard';
import { HeadingComponent } from '../shared/components/heading/heading.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    ProjectCardComponent,
    HeadingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  headingTitle: string = 'Angular 19 Projects for learning with fun';
  subHeading: string =
    'One-page Angular 30 + applications for learning & practicing angular concepts with example';

  projectCard: Iprojectcard[] = [
    {
      imageSrc: 'images/profile-card-app.png',
      title: 'Profile Card Applicaton',
      description:
        'Demonstrates string interpolation & two way data binding using Profile Card Application.',
      link: '/projects/profile-card',
    },
    {
      imageSrc: 'images/counter-app.png',
      title: 'A Smiple Counter Application',
      description:
        ' Build a counter application using signals & property binding.',
      link: '/projects/counter-app',
    },
    {
      imageSrc: 'images/todo-app.png',
      title: 'TO-DO Management Application',
      description:
        'Create a Todo management application using angular directives.',
      link: '/projects/todo-app',
    },
    {
      imageSrc: 'images/lion.png',
      title: 'Stopwatch Application',
      description:
        'Create a stopwach application using angular directives.',
      link: '/projects/todo-app',
    },
  ];
}
