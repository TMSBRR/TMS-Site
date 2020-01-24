import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeveloperComponent } from './developer/developer.component';
import { TranslatorComponent } from './translator/translator.component';
import { AboutComponent } from './about/about.component';
import { CreditsComponent } from './credits/credits.component';


const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'developer', component: DeveloperComponent},
{path: 'translator', component: TranslatorComponent},
{path: 'about', component: AboutComponent},
{path: 'credits', component: CreditsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
