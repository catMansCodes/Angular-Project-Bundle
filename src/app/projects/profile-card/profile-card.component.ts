import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeadingComponent } from '../../shared/components/heading/heading.component';

@Component({
  selector: 'app-profile-card',
  imports: [HeaderComponent, FooterComponent, FormsModule, HeadingComponent],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  profileCardHeading: string = 'Profile Card';
  profileCardSubHeading: string =
    'Explore an Angular 19 Data-binding concept using Profile Card application';

  userName: string = 'MR Stark';
  userAge: number = 30;
  userDescription: string = 'Java Developer at Stark Industries';
}
