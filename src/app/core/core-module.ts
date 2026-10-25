import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { HTTP_INTERCEPTORS, HttpClientModule }
  from '@angular/common/http';
import { LoaderInterceptor } from './interceptos/loader-interceptor';



@NgModule({
  declarations: [
    LoaderComponent
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
