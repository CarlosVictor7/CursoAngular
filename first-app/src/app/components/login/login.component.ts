import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ButtonModule } from 'primeng/button';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ChildcomponentComponent, ButtonModule],
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
  
  
  btnDisabled = false;
  btnLabel = 'Login';
  
  condition = true;
  idade = 20

  person = {nome: "Carlos"}
  
  title = 'Login Component';
  constructor() {}
  items: any[] = [];
  novoItem = '';
  isVisible = false;
  loadData() {
    this.isVisible = true;
  }
  mostrarLista = false;
  lista: string[] = [];
  adicionarItem() {
    if (this.novoItem.trim() !== '') {
      this.lista.push(this.novoItem.trim());
      this.novoItem = '';
    }
  }
  mostrar() {
    this.mostrarLista = true;
  }

  public loadingData$: Observable<any> = of([
    {name: 'Item 1', value: 10},
    {name: 'Item 2', value: 20},
    {name: 'Item 3', value: 30},
  ]).pipe(delay(2000));
  
  ngOnInit(): void {
    setTimeout(() => {
      this.items = [
        { name: 'Meia', value: 10 },
        { name: 'Boné', value: 20 },
        { name: 'Tênis', value: 30 },
        { name: 'Saia', value: 40 },
        { name: 'Cinto', value: 50 },
        { name: 'Camiseta', value: 60 },
        { name: 'Jaqueta', value: 70 },
        { name: 'Bermuda', value: 80 },
        { name: 'Camisa', value: 90 },
        { name: 'Calça', value: 100 }
      ];
    }, 10000);
    setTimeout(() => {
      this.isVisible = false;
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
  public trackByFn(index: number) {
    return index;
  }

  switchCondition = '';

  mudarLetra(novaLetra: string) {
    this.switchCondition = novaLetra;
  }
}
