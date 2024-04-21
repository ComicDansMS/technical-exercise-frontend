import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent {
  @Input() label!: string;
  @Input() inputText: string = '';
  @Output() inputTextChange = new EventEmitter<string>();
  @Output() addItem = new EventEmitter<string>();

  onAdd(): void {
    this.addItem.emit(this.inputText);
    this.inputText = '';
  }

  onInputTextChange(value: string): void {
    this.inputText = value;
    this.inputTextChange.emit(this.inputText);
  }
}
