import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@components/login/login.component';
import { GameEngineComponent } from '@components/game-engine/game-engine.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'game', component: GameEngineComponent },
  //{ path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: 'game', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: LoginComponent },
  { path: '**', component: LoginComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
