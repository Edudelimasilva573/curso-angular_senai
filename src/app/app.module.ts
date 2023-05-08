import { FirstComponentComponent } from './components/first-component/first-component.component';
import {NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

//Components
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-Browser/animations";
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './views/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { JogosComponent } from './views/jogos/jogos.component';

//paginas

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent, HeaderComponent, JogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule {


}
