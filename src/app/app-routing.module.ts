import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { NgifComponent } from './ngif/ngif.component';
import { AgularmaterialComponent } from './agularmaterial/agularmaterial.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'ngif', component: NgifComponent },
    { path: 'angularmaterial', component: AgularmaterialComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }