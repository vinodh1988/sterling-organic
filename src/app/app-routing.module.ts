import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
   {path:"",component: HomeComponent},
   {path:"about",component: AboutComponent},
   {path:"contact",component: ContactComponent},
   {path:"complaints",component: ComplaintComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


