import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { SongModule } from './songs/song.module';

@NgModule({
  imports: [ 
  BrowserModule,
  HttpModule,
  RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }  
    	]),
      SongModule
  ],
  
  declarations: [ 
    AppComponent,
    WelcomeComponent,
],
    
  bootstrap: [ AppComponent ],
})
export class AppModule { }
