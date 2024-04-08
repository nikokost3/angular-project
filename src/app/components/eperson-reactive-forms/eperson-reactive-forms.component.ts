import { Component, EventEmitter, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EPerson } from 'src/app/shared/interface/person';

@Component({
  selector: 'app-eperson-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './eperson-reactive-forms.component.html',
  styleUrl: './eperson-reactive-forms.component.css'
})
export class EpersonReactiveFormsComponent {
  @Output() person = new EventEmitter<EPerson>();

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    education: new FormControl('', Validators.required)
  });

  onSubmit(value: any) {
    this.person.emit(value as EPerson);
    this.form.reset();
  }
}
