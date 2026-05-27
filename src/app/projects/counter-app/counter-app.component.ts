import { Component, computed, signal } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeadingComponent } from '../../shared/components/heading/heading.component';

@Component({
  selector: 'app-counter-app',
  imports: [FooterComponent, HeaderComponent, HeadingComponent],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css',
})
export class CounterAppComponent {
  profileCardHeading: string = 'Counter Application';
  profileCardSubHeading: string =
    'Explore an Angular 19 signal & property binding concept with the help of counter application.';

  initialCount = signal(0);

  countValueString = computed(() => {
    const n = this.initialCount();
    if (n > 0) {
      return 'The counter value is Positive';
    }
    if (n < 0) {
      return 'The counter value is Negative';
    }
    return 'The counter value is Neutral';
  });

  countAlertClass = computed(() => {
    const n = this.initialCount();
    if (n > 0) {
      return 'alert alert-success';
    }
    if (n < 0) {
      return 'alert alert-danger';
    }
    return 'alert alert-secondary';
  });

  increaseCount() {
    this.initialCount.update((count) => count + 1);
  }

  decreaseCount() {
    this.initialCount.update((count) => count - 1); // use update when previous valude depend on next one
  }

  resetCount() {
    this.initialCount.set(0); // use set when diretly set to constant value
  }
}
