import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BrandsComponent } from './brands/brands.component';
import { BottomwearComponent } from './categories/bottomwear/bottomwear.component';
import { CategoriesComponent } from './categories/categories.component';
import { FootwearComponent } from './categories/footwear/footwear.component';
import { TopwearComponent } from './categories/topwear/topwear.component';
import { ContactusComponent } from './contactus/contactus.component';
import { InfoComponent } from './info/info.component';
import { MenComponent } from './men/men.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'info',component:InfoComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'brands',component:BrandsComponent},
  {path:'categories',component:CategoriesComponent,children:[
    {path:'topwear',component:TopwearComponent},
    {path:'bottomwear',component:BottomwearComponent},
    {path:'footwear',component:FootwearComponent},
  ]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
