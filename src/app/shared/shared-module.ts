import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from './components/button-component/button-component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

@NgModule({
  declarations: [ButtonComponent, InputCheckboxComponent, InputTextComponent,
    DropdownComponent, InputCheckboxComponent, RadioButtonComponent
  ],
  imports: [CommonModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  exports: [ButtonComponent,InputTextComponent]
})
export class SharedModule { }
