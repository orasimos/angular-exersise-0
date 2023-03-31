import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  userInput = '';
  even = '';
  odd = '';

  onSubmit(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
    if (this.userInput.length % 2 === 0) {
      this.even = this.userInput;
    } else {
      this.odd = this.userInput;
    }
  }
}
