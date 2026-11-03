import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from './components/button-component/button-component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormLabelComponent } from './components/form-label/form-label.component';



@NgModule({
  declarations: [ButtonComponent, FormLabelComponent],
  imports: [CommonModule, ButtonModule, InputTextModule,
    PasswordModule, ReactiveFormsModule, FloatLabelModule],
  exports: [ButtonComponent, FormLabelComponent,ReactiveFormsModule, InputTextModule, PasswordModule,
    FloatLabelModule
  ]
})
export class SharedModule { }
