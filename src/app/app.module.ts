import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';
import { AngularFireModule } from 'angularfire2';
import { routing } from './app.routing';

// All Component Imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/static/home.component';
import { AboutComponent } from './components/static/about.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

// All Service Imports
import { PostsService } from './components/posts/posts.service';
import {AF} from "./providers/af";



export const firebaseConfig = {
  apiKey: "AIzaSyA6i7UmsOUHJbF9G80a_TtVqAHwLX3eMaI",
  authDomain: "fir-chat-ca10c.firebaseapp.com",
  databaseURL: "https://fir-chat-ca10c.firebaseio.com",
  storageBucket: "fir-chat-ca10c.appspot.com",
  messagingSenderId: "330260328057"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    HomeComponent,
    AboutComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [PostsService, AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
