import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggingTableComponent } from './logging-table/logging-table.component';


const routes: Routes = [

  { path: 'Log', component: LoggingTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  
}
