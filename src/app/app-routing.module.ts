import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorpatchAppComponent} from './colorpatch/cp-app.component';
import { MemorygameComponent } from './memory/memorygame.component';

const routes: Routes = [
  { path: 'colorpatches', component: ColorpatchAppComponent },
  { path: 'memory', component: MemorygameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
