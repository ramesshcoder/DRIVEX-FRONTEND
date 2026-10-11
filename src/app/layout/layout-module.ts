import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing-module';
import { HeaderComponent } from './component/header-component/header-component';
import { FooterComponent } from './component/footer-component/footer-component';
import { LandingPageComponent } from './component/landing-page-component/landing-page-component';
import { SharedModule } from '../shared/shared-module';
import { HeroComponent } from './component/hero-component/hero-component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
