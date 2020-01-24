import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DeveloperComponent } from './developer/developer.component';
import { TranslatorComponent } from './translator/translator.component';
import { AboutComponent } from './about/about.component';
import { CreditsComponent } from './credits/credits.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookComponent } from './book/book.component';
import { ProfileComponent } from './profile/profile.component';
import { LangComponent } from './lang/lang.component';
import { StoreComponent } from './store/store.component';
import { LanguageComponent } from './language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    DeveloperComponent,
    TranslatorComponent,
    AboutComponent,
    CreditsComponent,
    NavbarComponent,
    BookComponent,
    ProfileComponent,
    LangComponent,
    StoreComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
	FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
