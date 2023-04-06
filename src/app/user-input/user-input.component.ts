import { Component, Input, Output, ViewChild } from '@angular/core';
import { EvenLengthWordsComponent } from '../even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from '../odd-length-words/odd-length-words.component';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Input() @Output() evenWords: string[] = [];
  @Input() @Output() oddWords: string[] = [];
  inputField = '';

  onSubmit() {
    const userInput = (document.getElementById("inputElement") as HTMLInputElement).value;
    console.log(userInput);
    if (userInput) {
      if (userInput.length % 2 === 0) {
        this.evenWords.push(userInput);
        console.log('Even: ' + this.evenWords);
      } else {
        this.oddWords.push(userInput);
        console.log('Odd: ' + this.oddWords);
      }
    }
    this.inputField = '';
  }
}
