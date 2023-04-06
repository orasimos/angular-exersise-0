import { Component, Input } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';

@Component({
  selector: 'app-odd-length-words',
  templateUrl: './odd-length-words.component.html',
  styleUrls: ['./odd-length-words.component.css']
})
export class OddLengthWordsComponent {
  @Input() oddWords: string[] = [];
}
