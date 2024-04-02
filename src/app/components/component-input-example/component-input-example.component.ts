import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interface/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {

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
  };
}
