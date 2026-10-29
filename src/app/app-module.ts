import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LayoutModule } from './layout/layout-module';
import { CarModule } from './features/car/car-module';
import { CoreModule } from './core/core-module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './features/auth/components/sign-up/sign-up.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [
    App,
    NotFoundComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CarModule,
    CoreModule,
    SharedModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
