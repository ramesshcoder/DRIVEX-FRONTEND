import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LayoutModule } from './layout/layout-module';
import { CarModule } from './features/car/car-module';
import { CoreModule } from './core/core-module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    App,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CarModule,
    CoreModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
