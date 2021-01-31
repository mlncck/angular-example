import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CardComponent } from './components/card/card.component'
import { FormActionsComponent } from './components/form-actions/form-actions.component'
import { FormGroupComponent } from './components/form-group/form-group.component'
import { InputContainerComponent } from './components/input-container/input-container.component'
import { InputDirective } from './directives/input.directive';
import { LoadingComponent } from './components/loading/loading.component'

const COMPONENTS = [
  InputContainerComponent,
  CardComponent,
  FormGroupComponent,
  FormActionsComponent,
  LoadingComponent,
];

const DIRECTIVES = [
  InputDirective
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
