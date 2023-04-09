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
  words: string[] = [];

  onSubmit() {
    const userInput = (document.getElementById("inputElement") as HTMLInputElement).value;
    console.log(userInput);

    if (userInput) {
      this.words = userInput.trim().split(" ");
      for (let word in this.words) {
        if (this.words[word].length % 2 === 0) {
          this.evenWords.push(this.words[word]);
        } else {
          this.oddWords.push(this.words[word]);
        }
      }
    }
    this.inputField = '';
    this.words = [];
  }
}
