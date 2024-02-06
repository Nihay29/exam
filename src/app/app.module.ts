import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { HomeComponent } from './home/home.component';
import { BagComponent } from './bag/bag.component';

const appRouting: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'women', component: WomenComponent },
  { path: 'men', component: MenComponent },
  { path: 'bag', component: BagComponent },
];
@NgModule({
  declarations: [AppComponent, WomenComponent, MenComponent, BagComponent],

  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRouting)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
