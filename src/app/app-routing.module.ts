import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourComponent } from './components/four/four.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
  
const routes: Routes = [ 
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'four', component: FourComponent},
  { path: 'fifth', component: FifthComponent},
  { path: 'sixth', component: SixthComponent},
  { path: 'directives', component: DirectivesComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'dynamic/:id', component: DynamicComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
