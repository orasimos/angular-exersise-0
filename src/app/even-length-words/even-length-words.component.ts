import { Component, Input } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';

@Component({
  selector: 'app-even-length-words',
  templateUrl: './even-length-words.component.html',
  styleUrls: ['./even-length-words.component.css']
})
export class EvenLengthWordsComponent {
  @Input() evenWords: string[] = [];
}
