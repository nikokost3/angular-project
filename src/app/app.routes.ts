import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';


export const routes: Routes = [
    {path: 'component-input-example', component: ComponentInputExampleComponent},
    {path: 'for-directive-example', component: ForDirectiveExampleComponent},
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
    {path: 'component-output-example', component: ComponentOutputExampleComponent},
    {path: '', component: WelcomeComponent}
];
