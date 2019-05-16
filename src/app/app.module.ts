import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {WelcomeComponent} from './welcome.component';
import {QuizComponent} from './quiz.component';
import {ResultComponent} from './result.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  {path: 'quiz', component: QuizComponent},
   {path: 'result', component: ResultComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule,
   RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    QuizComponent,
    ResultComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

