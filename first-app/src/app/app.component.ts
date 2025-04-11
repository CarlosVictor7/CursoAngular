import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignalsComponent } from './signals/signals.component';
import { ChildcomponentComponent } from './components/login/childcomponent/childcomponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SignalsComponent, ChildcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-app';
}
