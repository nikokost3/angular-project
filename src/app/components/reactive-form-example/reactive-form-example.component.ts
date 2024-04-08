import { Component } from '@angular/core';
import { EpersonReactiveFormsComponent } from '../eperson-reactive-forms/eperson-reactive-forms.component';
import { EPerson, Person } from 'src/app/shared/interface/person';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-reactive-form-example',
  standalone: true,
  imports: [EpersonReactiveFormsComponent, PersonTableComponent, SimpleDatatableComponent],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {
  currentPerson: EPerson;
  persons: EPerson[] = []

  onPerson(person: EPerson) {
    this.currentPerson = person;
    this.persons.push(person);
  }
}
