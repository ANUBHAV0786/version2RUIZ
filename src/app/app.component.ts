import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  // Title of the application
  // This is used in the HTML template to display the title of the application
  title = 'FireLMS';
  // Variable to control the state of the menu
  isMenuOpen = false;

  // Toggle the menu state
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  // Animation function to prepare the route for animation
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }



}
