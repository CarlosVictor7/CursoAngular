import { Component, Output, Input, EventEmitter,OnChanges, SimpleChanges, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-childcomponent',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputTextModule],
  templateUrl: './childcomponent.component.html',
  styleUrl: './childcomponent.component.scss'
})
export class ChildcomponentComponent implements OnChanges {

  addItem = output<any>();
  count = 0

  constructor() {}


  addElement() {
    this.addItem.emit({ id: this.count + 1 })
    this.count++
  }

  @Input({ required: true }) user!: { name: string, email: string };
  @Output() userUpdated = new EventEmitter<{ name: string, email: string }>();

  userToEdit: { name: string, email: string } = { name: '', email: '' };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      this.userToEdit = { ...changes['user'].currentValue };
    }
  }

  updateUser() {
    this.userUpdated.emit(this.userToEdit);
  }
  
}
