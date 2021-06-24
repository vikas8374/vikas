import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { InfoComponent } from './info/info.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { TopwearComponent } from './categories/topwear/topwear.component';
import { BottomwearComponent } from './categories/bottomwear/bottomwear.component';
import { FootwearComponent } from './categories/footwear/footwear.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    WomenComponent,
    AboutusComponent,
    ContactusComponent,
    InfoComponent,
    PagenotfoundComponent,
    SigninComponent,
    SignupComponent,
    BrandsComponent,
    CategoriesComponent,
    TopwearComponent,
    BottomwearComponent,
    FootwearComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
