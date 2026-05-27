import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
}
