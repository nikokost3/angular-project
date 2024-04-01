import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interface/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Nikos';

  person0: Person = {
      givenName: 'Nikos',
      surName: 'Kostakis',
      age: 31,
      email: 'nikoskos@aueb.gr',
      address: 'Athens, Greece'
    };
  
    person1: Person = {
      givenName: 'John',
      surName: 'Doe',
      age: 39,
      email: 'John@example.gr',
      address: 'New York, USA'
    }

}
