import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentsComponent } from './investments/investments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InvestmentsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
