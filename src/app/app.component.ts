import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exersize-0';

  @Input() @Output() evenWords: string[] = [];
  @Input() @Output() oddWords: string[] = [];
}
