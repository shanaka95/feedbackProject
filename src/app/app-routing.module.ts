import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
{
  path:"admin",
  component:AdminComponent
},
{
  path:"",
  component:UiComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
