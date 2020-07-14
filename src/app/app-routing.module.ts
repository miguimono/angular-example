import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourComponent } from './components/four/four.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
  
const routes: Routes = [ 
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'four', component: FourComponent},
  { path: 'fifth', component: FifthComponent},
  { path: 'sixth', component: SixthComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
