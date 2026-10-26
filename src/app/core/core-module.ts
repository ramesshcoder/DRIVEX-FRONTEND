import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { HTTP_INTERCEPTORS, HttpClientModule }
  from '@angular/common/http';
import { LoaderInterceptor } from './interceptos/loader-interceptor';
import { InputTextComponent } from './components/input-text/input-text.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';



@NgModule({
  declarations: [
    LoaderComponent,
    InputTextComponent,
    DropdownComponent,
    MultiSelectComponent,
    RadioButtonComponent,
    InputNumberComponent,
    InputCheckboxComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [LoaderComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }]
})
export class CoreModule { }
