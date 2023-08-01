import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() img!: string;
  @Input() img_alt!: string;
}
