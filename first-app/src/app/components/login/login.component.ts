import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ChildcomponentComponent],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  styles: [`p {color: red;}`]
    
})
export class LoginComponent implements AfterViewInit  {
  @ViewChild('someInput') someInput!: ElementRef;
  

  ngAfterViewInit(): void {
    console.log('Valor do input:'
    );
  }
  
  
  btnDisabled = true;
  btnLabel = 'Login';
  
  condition = true;
  idade = 20

  person = {nome: "Carlos"}
  
  title = 'Login Component';
  constructor() {}
  items: any[] = [];
  ngOnInit(): void {
    setTimeout(() => {
      this.items = [
        { name: 'Item 1', value: 10 },
        { name: 'Item 2', value: 40 },
        { name: 'Item 3', value: 50 }
      ];
    }, 10000);
  } 
  incrementar() {
    this.idade++;
  }

  decrementar() {
    this.idade--;
  }

  acaoMudarButton() {
    console.log('Botão clicado!');
    this.someInput.nativeElement.value = 'teste';
    this.valorParaFilho = this.someInput.nativeElement.value;
  }
  valorParaFilho = '';
  // acaoMudarButton(name: any, name1:any, someInput: any) {
  //   // name1.value = name.value;
  //   this.someInput.nativeElement.value = 'teste';
  // }

}
