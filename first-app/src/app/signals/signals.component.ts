import { CommonModule } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from '../components/login/login.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [ButtonModule, CommonModule, LoginComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent implements OnInit{
  title = 'Signal'
  constructor() {
    effect(() => {
      console.log (this.firstName())
      
      if (this.firstName() === 'Alberto') {
        alert('First Name is Alberto!');
      }
      console.log('Last Name: ', this.lastName());
      console.log('Full Name: ', this.fullName()); 
      console.log('Array: ', this.array());
    });
  }

  firstName = signal('John Doe');
  lastName = signal('Doe John');

  fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName();
  });

  i = 0
  array = signal([1])

  ngOnInit(): void {
    this.firstName.set('João');
  }

  updateName() {
    this.firstName.set('Alberto');
  }

  updateNames() {
    this.firstName.update((oldValue: string) => {
      return 'Alberto';
    });

    this.lastName.update((oldValue: string) => {
      return 'Silva';
    });
  }

  add() {
    this.array.update((oldValue: number[]) => {
      return [...oldValue, oldValue.length + 1];
    });
  }
}
