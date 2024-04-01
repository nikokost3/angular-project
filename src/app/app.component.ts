import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Nikos';

  person = {
    givenName: 'Nikos',
    surName: 'Kostakis',
    age: '31',
    email: 'nikoskos@aueb.gr'
  }
}
