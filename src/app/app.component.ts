import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardDesignerComponent } from './card-designer/card-designer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CardDesignerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
  
export class AppComponent {
 
}
