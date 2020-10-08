import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './common/menubar/menubar.component';
import {MaterialModule} from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './reusables/product/product.component'
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    AboutComponent,
    ComplaintComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
